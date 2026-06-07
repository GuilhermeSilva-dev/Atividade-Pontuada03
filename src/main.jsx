// Importa o StrictMode do React, uma ferramenta que ajuda a encontrar erros no código durante o desenvolvimento
import { StrictMode } from 'react'

// Importa o criador de raiz (createRoot), responsável por renderizar o React no HTML puro
import { createRoot } from 'react-dom/client'

// Importa os estilos globais (regras de reset, cores de fundo do site e animações)
import './index.css'

// Importa o componente maestro "App", que junta o Header, Home e Footer
import App from './App.jsx'

// Localiza a <div> com o id "root" lá no seu arquivo 'index.html'
// e cria a "raiz" do React dentro dela para renderizar todo o seu site
createRoot(document.getElementById('root')).render(
  // O StrictMode envolve o App para ativar verificações e alertas extras no console
  <StrictMode>
    
    {/* Renderiza o componente principal, exibindo toda a estrutura da homenagem */}
    <App />
    
  </StrictMode>,
)