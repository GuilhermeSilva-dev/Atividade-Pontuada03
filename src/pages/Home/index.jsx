import './style.css';

// IMPORTANDO AS FOTOS DA PASTA ASSETS
import fotoMae from '../../assets/mae.jpeg';
import fotoFamilia1 from '../../assets/familia1.jpeg';
import fotoFamilia2 from '../../assets/familia2.jpeg';
import fotoFamilia3 from '../../assets/familia3.jpeg';

export default function Home() {
  return (
    <main className="conteudo-home">
      
      <section className="introducao">
        <h2>Obrigado por Tudo, Mãe e Família!</h2>
        <p>Uma homenagem eterna à mulher que é minha base e à família que é o meu maior tesouro.</p>
      </section>

      {/* SEÇÃO MÃE */}
      <section id="mae" className="cartao-secao">
        <h3>🌹 Minha Mãe: Meu Exemplo de Amor</h3>
        <p>
          Mãe, eu agradeço por tudo o que a senhora fez e faz por mim. Sempre me educou para ser um homem de valores e princípios, e hoje eu entendo tudo: todos os puxões de orelha, brigas, reclamações e todo esse amor que não cabe no coração. Estou vivendo e tentando seguir os seus exemplos, sempre com um sorriso no rosto, até nos piores momentos. Sei que já passou por muitas coisas sozinha e que várias vezes disfarçou a dificuldade para que eu não percebesse. Muitas noites eu virava o dia pensando no rumo que iria dar à minha vida, e hoje eu paro e vejo tudo o que já passamos juntos. Nada disso é em vão. Sei que a senhora sempre quer o melhor para mim, e esta página é principalmente para você. Eu disse que iria criar uma para ti e a senhora disse que estava esperando. Muito obrigado por tudo, mãe. A senhora é e sempre será o meu amor. Eu te amo muito, minha "Coroa".
        </p>
      </section>

      {/* SEÇÃO FAMÍLIA (IRMÃOS) */}
      <section id="familia" className="cartao-secao">
        <h3>✨ Minha Família: Meus Irmãos, Minha Inspiração</h3>
        
        {/* PARÁGRAFOS DO IRMÃO */}
        <p>
          Meu irmão... O que falar de você? O cara que até hoje é a minha inspiração. Desde novo, você sempre foi atrás do seu sem querer o de ninguém, já recomeçou a vida várias vezes e, mesmo assim, nunca te vi reclamando de absolutamente nada. Já te vi virado trabalhando e sempre com um sorriso no rosto. Desde pequeno eu prestava atenção nas coisas que você fazia e, aos poucos, eu ia aprendendo e criando mais fascinação por você. 
        </p>
        <p style={{ marginBottom: '30px' }}>
          Sei que nunca fui o irmão perfeito que não dá dor de cabeça, pelo contrário, sempre fazia algo e ganhava reclamações, mas eu aprendi com tudo o que já passei. E sei que nada do que você me falou foi em vão. Você é um cara incrível e espero poder continuar vendo a sua trajetória da melhor forma. Muito obrigado por tudo, cara. Eu te amo, irmão!
        </p>

        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '25px 0' }} />

        {/* PARÁGRAFOS DA IRMÃ */}
        <p>
          E você, minha irmã, pensa que eu esqueci de ti? Você nunca vai ser esquecida! Pode até morar muito longe, mas sempre vai estar pertinho de mim, no meu coração. Eu não tenho palavras para descrever o quanto eu te amo. Desde novo, você me ensinava coisas que até hoje eu coloco em prática. Lembro de todas as vezes que saímos e você se divertia comigo. Hoje eu entendo o que é realmente sentir saudades de alguém que foi e é muito especial na minha vida, mas que não está mais tão presente como antes. 
        </p>
        <p>
          Você criou uma família e eu sou muito grato por isso; agora tem o seu cantinho e várias outras coisas para se preocupar. Quem diria que eu daria a minha coleção de Hot Wheels para alguém? Pois é, eu não pensei duas vezes quando veio essa ideia: meu sobrinho nasceu e foi amor à primeira vista. Eu nunca tinha sentido meu coração bater tão forte; quando vi aquele ser humano tão minúsculo nos meus braços, eu fiquei muito feliz e não queria que aquele momento passasse por nada. Hoje ele já está um garoto cheio de saúde e com muita energia para curtir a vida e brincar muito. Isso é um pouco do que sinto e que nunca consegui falar para ti. Obrigado por tudo, minha irmã. Eu te amo!
        </p>
      </section>

      {/* GALERIA DE MEMÓRIAS */}
      <section id="galeria" className="cartao-secao">
        <h3>📸 Galeria de Memórias</h3>
        <p>Nossos momentos mais marcantes e sorrisos guardados para sempre.</p>
        
        <div className="galeria-fotos">
          <div className="moldura-foto">
            <img src={fotoMae} alt="Momento com minha mãe" />
            <span>Mãe, Amor Incondicional</span>
          </div>
          <div className="moldura-foto">
            <img src={fotoFamilia1} alt="Família reunida 1" />
            <span>Nossa União</span>
          </div>
          <div className="moldura-foto">
            <img src={fotoFamilia2} alt="Família reunida 2" />
            <span>Sorrisos Compartilhados</span>
          </div>
          <div className="moldura-foto">
            <img src={fotoFamilia3} alt="Família reunida 3" />
            <span>Amor que não se mede</span>
          </div>
        </div>
      </section>

      {/* DEDICATÓRIAS EM VÍDEO */}
      <section id="video" className="cartao-secao">
        <h3>🎥 Música especial </h3>
        <p>Uma simples música que trás lembranças.</p>
        
        <div className="container-video">
          <iframe 
            src="https://www.youtube.com/embed/qEm98jLkeHI" 
            title="Dedicatória Especial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </main>
  );
}