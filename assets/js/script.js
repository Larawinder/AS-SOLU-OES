
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav){
  toggle.addEventListener('click', ()=>{
    nav.classList.toggle('open');
  });
}

/* Header transparente no topo */
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// abre submenu no mobile com toque
document.querySelectorAll('.dropdown > a').forEach(anchor=>{
  anchor.addEventListener('click', (e)=>{
    const width = window.innerWidth;
    if (width <= 920){
      const parent = anchor.parentElement;
      const hasMenu = parent.querySelector('.dropdown-menu');
      if (hasMenu){
        // primeiro toque apenas abre/fecha, segundo toca no link
        if (!parent.classList.contains('open')){
          e.preventDefault();
          parent.classList.add('open');
        } else {
          // permite navegar para a página principal do item
        }
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Seleciona TODOS os formulários que tenham o atributo action do Formspree
  const forms = document.querySelectorAll('form[action="https://formspree.io/f/mwprznnd"]');

  forms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      let mensagemSucesso = document.getElementById("mensagem-sucesso");

      // Se não existir mensagem global, cria uma temporária logo após o formulário
      if (!mensagemSucesso) {
        mensagemSucesso = document.createElement("div");
        mensagemSucesso.id = "mensagem-sucesso";
        mensagemSucesso.style = `
          color:#00f2a9;
          margin-top:20px;
          text-align:center;
          font-size:1.1rem;
          font-weight:600;
          display:none;
        `;
        form.insertAdjacentElement("afterend", mensagemSucesso);
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" },
        });

        if (response.ok) {
          mensagemSucesso.textContent = "✓ Mensagem enviada com sucesso! Aguarde nossa resposta.";
          mensagemSucesso.style.display = "block";
          form.reset();

          setTimeout(() => {
            mensagemSucesso.style.display = "none";
          }, 5000);
        } else {
          alert("Erro ao enviar mensagem. Tente novamente.");
        }
      } catch (error) {
        alert("Falha ao enviar. Verifique sua conexão e tente novamente.");
      }
    });
  });
});
