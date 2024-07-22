document.addEventListener('DOMContentLoaded', function() {
  const mainContent = document.getElementById('main-content');
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const section = this.getAttribute('data-section');
          loadContent(section);
      });
  });
  // Define qual conteúdo vai ser carregado
  function loadContent(section) {
      let content = '';
      switch(section) {
          case 'home':
              content = `
                  <section class="content">
                      <h1>Bem-vindo à Home</h1>
                      <p>Este é o conteúdo da página inicial.</p>
                      <img src="imagem.jpg" alt="Imagem de Exemplo">
                  </section>`;
              break;
          case 'sobre':
              content = `
                  <section class="content">
                      <h1>Sobre Nós</h1>
                      <p>Informações sobre a empresa.</p>
                  </section>`;
              break;
          case 'servicos':
              content = `
                  <section class="content">
                      <h1>Nossos Serviços</h1>
                      <p>Descrição dos serviços oferecidos.</p>
                  </section>`;
              break;
          case 'contato':
              content = `
                  <section class="form-section">
                      <h2>Entre em Contato</h2>
                      <form>
                          <label for="name">Nome:</label>
                          <input type="text" id="name" name="name" required>
                          <label for="email">E-mail:</label>
                          <input type="email" id="email" name="email" required>
                          <label for="message">Mensagem:</label>
                          <textarea id="message" name="message" required></textarea>
                          <button type="submit">Enviar</button>
                      </form>
                  </section>`;
              break;
      }
      mainContent.innerHTML = content;
  }

  // Carrega conteúdo inicial
  loadContent('home');
});