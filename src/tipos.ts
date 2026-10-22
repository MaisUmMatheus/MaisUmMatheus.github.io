export interface Experiencia {
  cargo: string;
  empresa: string;
  /** Ex.: "Jan 2025" */
  inicio: string;
  /** Deixe sem `fim` para um trabalho atual: ele aparece como "running". */
  fim?: string;
  contexto?: string;
  /** Só os trabalhos atuais mostram a lista de atividades. */
  atividades?: string[];
}

export interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  link: string;
  /** Caminho de uma imagem em /public. Sem imagem, aparece um bloco com o nome. */
  imagem?: string;
}

export interface GrupoStack {
  titulo: string;
  itens: string[];
}

export interface Perfil {
  nome: string;
  linhaTopo: string;
  frase: string;
  email: string;
  linkedin: string;
  github: string;
  curriculo: string;
  terminal: string[];
}
