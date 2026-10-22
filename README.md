# maisummatheus.github.io

Meu site pessoal, com cara de relatório de testes: cada experiência é uma *suite* e cada atividade é um caso que passou.

**No ar:** https://maisummatheus.github.io

## Stack

- React 19 + TypeScript + Vite
- Testes E2E com Playwright, no desktop e no celular
- GitHub Actions: roda os testes a cada push e só publica no GitHub Pages se todos passarem

## Como atualizar o conteúdo

Todo o texto do site está em [`src/dados.ts`](src/dados.ts). Para adicionar uma experiência ou um projeto, edite as listas desse arquivo. O TypeScript avisa se faltar algum campo.

- Uma experiência **sem** `fim` aparece como trabalho atual, com o selo `running`.
- Um projeto pode ter `imagem: '/meu-print.png'` (coloque o arquivo em `public/`).
- A cor principal fica em `--destaque`, no topo de [`src/estilos.css`](src/estilos.css).

## Rodando localmente

```bash
npm install
npm run dev        # abre em http://localhost:5173
npm run build      # gera a versão final em dist/
npm test           # roda os testes Playwright (precisa do build antes)
```

Na primeira vez que for rodar os testes: `npx playwright install chromium`.
