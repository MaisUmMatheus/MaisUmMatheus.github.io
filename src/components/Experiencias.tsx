import type { Experiencia } from '../tipos';
import { Secao } from './Secao';

function Periodo({ exp }: { exp: Experiencia }) {
  return (
    <span className="periodo">
      {exp.inicio} – {exp.fim ?? 'atual'}
    </span>
  );
}

export function Experiencias({ itens }: { itens: Experiencia[] }) {
  const atuais = itens.filter((e) => !e.fim);
  const anteriores = itens.filter((e) => e.fim);

  return (
    <Secao id="experiencia" rotulo="describe('experiência')" titulo="Onde eu trabalho">
      <div className="pilha">
        {atuais.map((exp) => (
          <article key={exp.empresa} className="cartao exp" data-testid="experiencia-atual">
            <div className="exp__topo">
              <h3 className="exp__cargo">
                {exp.cargo} <span className="exp__empresa">· {exp.empresa}</span>
              </h3>
              <div className="exp__status">
                <span className="selo-running">
                  <span className="selo-running__ponto" aria-hidden="true" />
                  running
                </span>
                <strong>
                  <Periodo exp={exp} />
                </strong>
              </div>
            </div>
            {exp.contexto && <p className="exp__contexto">{exp.contexto}</p>}
            {exp.atividades && (
              <ul className="exp__lista">
                {exp.atividades.map((a) => (
                  <li key={a}>
                    <span className="destaque mono" aria-hidden="true">
                      ✓{' '}
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}

        {anteriores.map((exp) => (
          <article key={exp.empresa} className="exp-anterior">
            <h3 className="exp-anterior__cargo">
              {exp.cargo} <span className="exp__empresa">· {exp.empresa}</span>
            </h3>
            <span className="mono mudo exp-anterior__data">
              <span className="destaque">passed</span>  <Periodo exp={exp} />
            </span>
          </article>
        ))}
      </div>
    </Secao>
  );
}
