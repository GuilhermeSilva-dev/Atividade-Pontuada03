import './style.css';

export default function Header() {
  return (
    <header className="cabecalho-site">
      <h1>💝 Homenagem Especial</h1>
      <nav className="menu-navegacao">
        <a href="#mae">Mãe</a>
        <a href="#familia">Família</a> 
        <a href="#galeria">Memórias</a>
        <a href="#video">Vídeo</a>
      </nav>
    </header>
  );
}