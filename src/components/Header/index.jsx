// Importa o arquivo de estilos (CSS) que define o visual do cabeçalho
import './style.css';

// Cria e exporta o componente "Header" para que ele seja exibido no topo do site
export default function Header() {
  return (
    // A tag semântica <header> indica que esta é a área de cabeçalho do site
    <header className="cabecalho-site">
      
      {/* Título principal do topo do site, acompanhado de um emoji de coração */}
      <h1>💝 Homenagem Especial</h1>
      
      {/* A tag <nav> indica que este bloco contém o menu de navegação do site */}
      <nav className="menu-navegacao">
        
        {/* Links do tipo âncora (href="#id"): ao clicar, a página desliza 
            diretamente para a seção correspondente na Home */}
        <a href="#mae">Mãe</a>
        <a href="#familia">Família</a> 
        <a href="#galeria">Memórias</a>
        <a href="#video">Vídeo</a>
        
      </nav>
    </header>
  );
}