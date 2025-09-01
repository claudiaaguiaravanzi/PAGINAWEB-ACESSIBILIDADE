document.addEventListener('DOMContentLoaded', function(){

        // BOTÕES ACESSIBILIDADE
    const botaoAcess = document.getElementById("botao-acessibilidade").addEventListener("click", () => {
  const opcoes = document.getElementById("opcoes-acessibilidade");
  opcoes.classList.toggle("visivel");
});


    let tamanhoFonte = 1;

    document.getElementById('aumentar-fonte').addEventListener('click', () => {
        tamanhoFonte += 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    });

    document.getElementById('diminuir-fonte').addEventListener('click', () => {
        tamanhoFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    });

    document.getElementById('alterna-contraste').addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

    // ==========================
    // VER CONTEÚDO DOS TÓPICOS
    // ==========================
    const botoesConteudo = document.querySelectorAll('.btn-ver-conteudo');
    botoesConteudo.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            const p = document.getElementById(target);
            p.classList.toggle('oculto');
        });
    });

    // ==========================
    // SCROLL REVEAL
    // ==========================
    ScrollReveal().reveal('#inicio', { delay: 300 });
    ScrollReveal().reveal('#topicos', { delay: 300 });
    ScrollReveal().reveal('#contato', { delay: 300 });

    // ==========================
    // INSERIR ÍCONES DE CONTATO
    // ==========================
    const divContato = document.getElementById('contato');
    if(divContato){
        const containerIcones = document.createElement('div');
        containerIcones.classList.add('text-center', 'my-3', 'd-flex', 'justify-content-center', 'gap-3');

        // WhatsApp
        const whatsapp = document.createElement('a');
        whatsapp.href = 'https://wa.me/5511999999999';
        whatsapp.target = '_blank';
        whatsapp.innerHTML = '<i class="bi bi-whatsapp" style="font-size:1.5rem;"></i>';
        whatsapp.title = 'WhatsApp';

        // Facebook
        const facebook = document.createElement('a');
        facebook.href = 'https://www.facebook.com/seupagina';
        facebook.target = '_blank';
        facebook.innerHTML = '<i class="bi bi-facebook" style="font-size:1.5rem;"></i>';
        facebook.title = 'Facebook';

        // Instagram
        const instagram = document.createElement('a');
        instagram.href = 'https://www.instagram.com/seuperfil';
        instagram.target = '_blank';
        instagram.innerHTML = '<i class="bi bi-instagram" style="font-size:1.5rem;"></i>';
        instagram.title = 'Instagram';

        containerIcones.appendChild(whatsapp);
        containerIcones.appendChild(facebook);
        containerIcones.appendChild(instagram);

        divContato.appendChild(containerIcones);
    }

});
