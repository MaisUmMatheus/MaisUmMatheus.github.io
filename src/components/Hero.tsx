import type { Perfil } from '../tipos';
import { Terminal } from './Terminal';

export function Hero({ perfil }: { perfil: Perfil }) {
  const [primeiro, ...resto] = perfil.nome.split(' ');
  const meio = resto.slice(0, -1).join(' ');
  const ultimo = resto[resto.length - 1];

  return (
    <section id="topo" className="container hero">
      <div className="hero__texto">
        <p className="rotulo">// {perfil.linhaTopo}</p>
        <h1 className="hero__nome">
          {primeiro} {meio}
          <br />
          {ultimo}
        </h1>
        <p className="hero__frase">{perfil.frase}</p>
        <div className="botoes">
          <a href="#contato" className="botao botao--cheio">
            Falar comigo
          </a>
          <a href={perfil.curriculo} className="botao botao--contorno" download>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Baixar currículo
          </a>
        </div>
      </div>
      <Terminal linhas={perfil.terminal} anos="3 anos" />
    </section>
  );
}
