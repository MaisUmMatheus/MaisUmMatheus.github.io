import { Cabecalho } from './components/Cabecalho';
import { Contato } from './components/Contato';
import { Experiencias } from './components/Experiencias';
import { Hero } from './components/Hero';
import { Projetos } from './components/Projetos';
import { Stack } from './components/Stack';
import { experiencias, perfil, projetos, stack } from './dados';

export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero perfil={perfil} />
        <Experiencias itens={experiencias} />
        <Projetos itens={projetos} />
        <Stack grupos={stack} />
        <Contato perfil={perfil} />
      </main>
    </>
  );
}
