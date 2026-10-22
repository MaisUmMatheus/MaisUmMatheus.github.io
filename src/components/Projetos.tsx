import type { Projeto } from '../tipos';
import { Secao } from './Secao';

export function Projetos({ itens }: { itens: Projeto[] }) {
  return (
    <Secao id="projetos" rotulo="describe('projetos')" titulo="O que eu construí">
      <div className="grade-projetos">
        {itens.map((p) => (
          <a key={p.nome} href={p.link} className="cartao projeto" target="_blank" rel="noreferrer" data-testid="projeto">
            {p.imagem ? (
              <img className="projeto__imagem" src={p.imagem} alt={`Tela do projeto ${p.nome}`} />
            ) : (
              <div className="projeto__capa" aria-hidden="true">
                <span>{p.nome}</span>
              </div>
            )}
            <div className="projeto__corpo">
              <h3 className="projeto__nome">{p.nome}</h3>
              <p className="projeto__descricao">{p.descricao}</p>
              <ul className="etiquetas" aria-label="Tecnologias">
                {p.tecnologias.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </Secao>
  );
}
