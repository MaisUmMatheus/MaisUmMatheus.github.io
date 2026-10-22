import { useEffect, useState } from 'react';

interface Props {
  linhas: string[];
  anos: string;
}

const prefereMenosMovimento = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mostra os "testes" passando um por um, como uma execução do Cypress.
export function Terminal({ linhas, anos }: Props) {
  const total = linhas.length + 1; // + a linha final de PASS
  const [visiveis, setVisiveis] = useState(() => (prefereMenosMovimento() ? total : 0));

  useEffect(() => {
    if (visiveis >= total) return;
    const espera = visiveis === 0 ? 700 : 450;
    const id = window.setTimeout(() => setVisiveis((v) => v + 1), espera);
    return () => window.clearTimeout(id);
  }, [visiveis, total]);

  const terminou = visiveis >= total;

  return (
    <div className="terminal" role="img" aria-label={`Execução de testes: ${linhas.join(', ')}. Todos passaram.`}>
      <div className="terminal__barra" aria-hidden="true">
        <span className="terminal__bola" />
        <span className="terminal__bola" />
        <span className="terminal__bola" />
        <span className="terminal__titulo">terminal — zsh</span>
      </div>
      <div className="terminal__corpo" aria-hidden="true">
        <div>
          <span className="mudo">$</span> npx cypress run --spec <span className="azul">matheus.cy.ts</span>
        </div>
        <div className="mudo terminal__espaco">  Running: matheus.cy.ts</div>
        <div className="terminal__suite">  Matheus Fahl Fernandes</div>
        {linhas.map((linha, i) => (
          <div key={linha} className={i < visiveis ? 'terminal__linha visivel' : 'terminal__linha'}>
            {'    '}
            <span className="destaque">✓</span> {linha}
          </div>
        ))}
        <div className={terminou ? 'terminal__resultado visivel' : 'terminal__resultado'} data-testid="terminal-resultado">
          <span className="selo-pass">PASS</span>  {linhas.length} passing <span className="mudo">({anos})</span>
        </div>
        {!terminou && <span className="cursor" />}
      </div>
    </div>
  );
}
