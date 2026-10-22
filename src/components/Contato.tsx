import type { Perfil } from '../tipos';

export function Contato({ perfil }: { perfil: Perfil }) {
  return (
    <section id="contato" className="secao" aria-labelledby="contato-titulo">
      <div className="container contato">
        <p className="rotulo">it('deve responder em até 24h')</p>
        <h2 id="contato-titulo" className="contato__titulo">
          Vamos conversar?
        </h2>
        <div className="botoes">
          <a href={`mailto:${perfil.email}`} className="botao botao--cheio">
            {perfil.email}
          </a>
          <a href={perfil.linkedin} className="botao botao--contorno" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={perfil.github} className="botao botao--contorno" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <footer className="rodape mono mudo">
          © {new Date().getFullYear()} {perfil.nome} · <span className="destaque">0 bugs conhecidos</span>
        </footer>
      </div>
    </section>
  );
}
