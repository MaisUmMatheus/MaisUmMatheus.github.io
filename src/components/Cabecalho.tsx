const links = [
  { href: '#experiencia', texto: 'Experiência' },
  { href: '#projetos', texto: 'Projetos' },
  { href: '#stack', texto: 'Stack' },
  { href: '#contato', texto: 'Contato' },
];

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav className="container cabecalho__nav" aria-label="Principal">
        <a href="#topo" className="logo">
          matheus<span className="destaque">.spec</span>.ts
        </a>
        <ul className="cabecalho__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
