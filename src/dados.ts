// Todo o conteúdo do site fica aqui. Para atualizar o site, edite só este arquivo.
import type { Experiencia, GrupoStack, Perfil, Projeto } from './tipos';

export const perfil: Perfil = {
  nome: 'Matheus Fahl Fernandes',
  linhaTopo: 'QA Pleno · Full-Stack · São Carlos, SP',
  frase:
    'Eu testo software para ele quebrar comigo, e não com o usuário. Automação com Cypress e Playwright, e desenvolvimento Web e Mobile de ponta a ponta.',
  email: 'matheusfahl1@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/matheus-fahl-fernandes/',
  github: 'https://github.com/MaisUmMatheus',
  curriculo: '/curriculo-matheus-fahl.pdf',
  terminal: [
    '3 anos garantindo qualidade de software',
    'automatiza testes com Cypress e Playwright',
    'desenvolve Web e Mobile (React, Flutter, C#)',
    'dá suporte e treina times de Service Desk',
  ],
};

export const experiencias: Experiencia[] = [
  {
    cargo: 'Service Desk e Desenvolvimento',
    empresa: 'DemandaNet',
    inicio: 'Jan 2025',
    contexto: 'Secretaria de Educação de São Carlos · ERP de Educação Pública',
    atividades: [
      'Desenvolvimento Full-Stack (PHP/jQuery)',
      'Relatórios para sistemas com FPDF/PHP',
      'Fluxo de dados para servidores (SQL)',
      'Implantação e treinamento, remoto e presencial',
      'Suporte a integrações de gestão pública (APIs)',
      'Atendimento Help Desk e Service Desk',
    ],
  },
  {
    cargo: 'Analista de Qualidade (QA)',
    empresa: 'Central IA',
    inicio: 'Jun 2025',
    contexto: 'Times ágeis · Scrum',
    atividades: [
      'Testes funcionais, de aceitação e de APIs REST',
      'Automação com Cypress',
      'Regressão pré-deploy e sanidade pós-deploy',
      'Métricas de qualidade e gestão no Jira',
    ],
  },
  { cargo: 'Service Desk', empresa: 'Unimed', inicio: 'Fev 2026', fim: 'Abr 2026' },
  { cargo: 'Estágio em Dados e Suporte', empresa: 'Prefeitura de São Carlos', inicio: 'Mar 2024', fim: 'Dez 2024' },
  { cargo: 'Estágio em Desenvolvimento', empresa: 'JN Moura Sistemas', inicio: 'Jan 2024', fim: 'Mar 2024' },
];

export const projetos: Projeto[] = [
  {
    nome: 'LICÀRT',
    descricao:
      'Loja virtual de camisas com estampas feitas à mão: vitrine, carrinho, login e painel admin em tempo real.',
    tecnologias: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/MaisUmMatheus/Licart',
  },
  {
    nome: 'IA Metadados',
    descricao: 'Projeto de Inteligência Artificial em Python.',
    tecnologias: ['Python', 'IA'],
    link: 'https://github.com/MaisUmMatheus/IA_Metadados',
  },
  {
    nome: 'Este site',
    descricao:
      'Portfólio em React e TypeScript com testes E2E em Playwright, que rodam no GitHub Actions antes de cada publicação.',
    tecnologias: ['React', 'TypeScript', 'Playwright'],
    link: 'https://github.com/MaisUmMatheus/MaisUmMatheus.github.io',
  },
];

export const stack: GrupoStack[] = [
  { titulo: 'testes', itens: ['Cypress', 'Playwright', 'APIs REST', 'Jira · JQL'] },
  { titulo: 'front-end', itens: ['TypeScript', 'JavaScript', 'React', 'Vite', 'Angular'] },
  { titulo: 'back-end · mobile', itens: ['C# / .NET', 'PHP', 'Flutter'] },
  { titulo: 'dados', itens: ['SQL', 'MySQL', 'PL/SQL'] },
];
