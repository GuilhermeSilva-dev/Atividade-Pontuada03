// Importa os componentes estruturais que você criou em outras pastas
import Header from './components/Header'; // Traz o cabeçalho (menu do topo)
import Home from './pages/Home';         // Traz o conteúdo principal (textos, fotos e vídeos)
import Footer from './components/Footer'; // Traz o rodapé do site

// Define e exporta o componente principal "App", que é o coração/raiz de toda a aplicação React
export default function App() {
  return (
    // Abre um "React Fragment" (<>). Ele serve para agrupar vários componentes juntos 
    // sem precisar criar uma tag <div> física, deixando o código HTML final mais limpo.
    <>
      {/* Renderiza a barra de navegação fixada no topo do site */}
      <Header />
      
      {/* Renderiza a página Home com as homenagens à sua mãe e irmãos, galeria e player */}
      <Home />
      
      {/* Renderiza o rodapé com a frase afetiva e as informações do SENAI */}
      <Footer /> 
    </>
    // Fecha o React Fragment (</>)
  );
}