import { expect, test } from '@playwright/test';
import { experiencias, perfil, projetos } from '../src/dados';

test.describe('Página inicial', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('mostra nome e título da página', async ({ page }) => {
    await expect(page).toHaveTitle(/Matheus Fahl Fernandes/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Matheus');
  });

  test('terminal termina a execução com PASS', async ({ page }) => {
    const resultado = page.getByTestId('terminal-resultado');
    await expect(resultado).toHaveClass(/visivel/, { timeout: 10_000 });
    await expect(resultado).toContainText(`${perfil.terminal.length} passing`);
  });

  test('menu leva até cada seção', async ({ page }) => {
    for (const [link, secao] of [
      ['Experiência', '#experiencia'],
      ['Projetos', '#projetos'],
      ['Stack', '#stack'],
      ['Contato', '#contato'],
    ]) {
      await page.getByRole('navigation').getByRole('link', { name: link }).click();
      await expect(page.locator(secao)).toBeInViewport();
    }
  });
});

test.describe('Experiência', () => {
  test('trabalhos atuais aparecem com selo running e data', async ({ page }) => {
    await page.goto('/');
    const atuais = experiencias.filter((e) => !e.fim);
    const cartoes = page.getByTestId('experiencia-atual');
    await expect(cartoes).toHaveCount(atuais.length);
    for (const [i, exp] of atuais.entries()) {
      await expect(cartoes.nth(i)).toContainText(exp.empresa);
      await expect(cartoes.nth(i)).toContainText('running');
      await expect(cartoes.nth(i)).toContainText(`${exp.inicio} – atual`);
    }
  });
});

test.describe('Projetos', () => {
  test('cada projeto aponta para o repositório certo', async ({ page }) => {
    await page.goto('/');
    const cartoes = page.getByTestId('projeto');
    await expect(cartoes).toHaveCount(projetos.length);
    for (const [i, p] of projetos.entries()) {
      await expect(cartoes.nth(i)).toHaveAttribute('href', p.link);
    }
  });
});

test.describe('Contato e downloads', () => {
  test('links de contato estão corretos', async ({ page }) => {
    await page.goto('/');
    const contato = page.locator('#contato');
    await expect(contato.getByRole('link', { name: perfil.email })).toHaveAttribute('href', `mailto:${perfil.email}`);
    await expect(contato.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', perfil.linkedin);
    await expect(contato.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', perfil.github);
  });

  test('currículo em PDF está disponível', async ({ page, request }) => {
    await page.goto('/');
    const href = await page.getByRole('link', { name: 'Baixar currículo' }).getAttribute('href');
    expect(href).toBe(perfil.curriculo);
    const resposta = await request.get(href!);
    expect(resposta.ok()).toBeTruthy();
    expect(resposta.headers()['content-type']).toContain('pdf');
  });
});

test('página não tem rolagem horizontal', async ({ page }) => {
  await page.goto('/');
  const sobra = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(sobra).toBeLessThanOrEqual(0);
});
