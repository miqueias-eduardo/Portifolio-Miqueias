 document.addEventListener('DOMContentLoaded', () => {
    const projetos = document.getElementById('projetos');
    const botoes = Array.from(document.querySelectorAll('input[name="imagem"]'));
    const textos = Array.from(document.querySelectorAll('#text-img .text'));
    const label = Array.from(document.querySelectorAll('.navegacao-btn .btn'));
    const total = botoes.length;
    let atual_slider = 0;
    

    // movendo a imagem e o texto de acordo com o botao selecionado
    function goTo(id) {
      projetos.style.transform = `translateX(-${id * (100/total)}%)`;
      botoes.forEach((b, indice) => b.checked = indice === id);
      atual_slider = id;

    // mudando a cor do botao da imagem exibida

    label.forEach((l, indice) => {
       l.classList.toggle('active', indice===id);
    });
    
    //texto para cada imagem
      textos.forEach((t, indice) =>{
        t.classList.toggle('active', indice===id);

      
      } );
    }

    // navegação manual
    botoes.forEach((b, indice) => {
      b.addEventListener('change', () => goTo(indice));
    });

    goTo(0);

    // autoplay
    let time = setInterval(() => goTo((atual_slider + 1) % total), 6000);

    // pausa no hover e volta a executar quando retira o hover
    const slider = document.getElementById('slider');
    slider.addEventListener('mouseenter', () => clearInterval(time));
    slider.addEventListener('mouseleave', () => {
      time = setInterval(() => goTo((atual_slider + 1) % total), 6000);
    });

    //mensagem que aparece ao enviar uma mensagem 
 
  const enviar = document.querySelector('#mens input[value="Enviar"]');
  const mostrar_mensagem = document.getElementById('mostrar_mens');

  //função para enviar a mensagem
function mensagem (){

   const input = Array.from(document.querySelectorAll('.formulario'));
 const preenchido = input.every(input => input.value.trim() !== '');

  if(preenchido) {
 mostrar_mensagem.classList.toggle('active')
  }
  
}

  enviar.addEventListener('click', () => mensagem());
  });
