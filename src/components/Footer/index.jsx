// Importa o arquivo de estilos (CSS) específico para o rodapé
import './style.css';

// Cria e exporta o componente "Footer" para que ele possa ser usado no App principal
export default function Footer() {
  return (
    // A tag semântica <footer> engloba todo o conteúdo da parte inferior do site
    <footer className="rodape-site">
      
      {/* Parágrafo que exibe a mensagem principal e afetiva do rodapé */}
      <p className="frase-carinhosa">
        "A família é onde nossa história começa e o amor nunca termina." ❤️
      </p>
      
      {/* Parágrafo dedicado aos créditos autorais e informações acadêmicas */}
      <p className="creditos">
        {/* A tag <strong> deixa o seu nome em negrito para dar destaque */}
        © 2026 - Desenvolvido por <strong>Guilherme</strong> para fins educacionais | SENAI - Bahia
      </p>
      
    </footer>
  );
}