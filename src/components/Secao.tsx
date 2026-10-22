import type { ReactNode } from 'react';

interface Props {
  id: string;
  rotulo: string;
  titulo: string;
  children: ReactNode;
}

export function Secao({ id, rotulo, titulo, children }: Props) {
  return (
    <section id={id} className="secao" aria-labelledby={`${id}-titulo`}>
      <div className="container secao__miolo">
        <p className="rotulo">{rotulo}</p>
        <h2 id={`${id}-titulo`} className="secao__titulo">
          {titulo}
        </h2>
        {children}
      </div>
    </section>
  );
}
