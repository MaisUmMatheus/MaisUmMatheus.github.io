import type { GrupoStack } from '../tipos';
import { Secao } from './Secao';

export function Stack({ grupos }: { grupos: GrupoStack[] }) {
  return (
    <Secao id="stack" rotulo="describe('stack')" titulo="Com o que eu trabalho">
      <div className="grade-stack">
        {grupos.map((g) => (
          <div key={g.titulo} className="stack-grupo">
            <h3 className="mono mudo stack-grupo__titulo">{g.titulo}</h3>
            <ul className="pilulas">
              {g.itens.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Secao>
  );
}
