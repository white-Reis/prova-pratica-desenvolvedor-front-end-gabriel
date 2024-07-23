document.addEventListener('DOMContentLoaded', function () {
  const mainContent = document.getElementById('main-content');
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const section = this.getAttribute('data-section');
      loadContent(section);
    });
  });

  // Define qual conteúdo vai ser carregado
  function loadContent(section) {
    let content = '';
    switch (section) {
      case 'home':
        content = `
                  <section class="content">
                      <h1>Bem-vindo ao Adote seu Humano!</h1>
                      <div class="body-home">
                        <div class="text-container">
                         <p>Somos uma comunidade dedicada a ajudar gatos a encontrar os humanos perfeitos. Navegue pelas nossas seções e descubra como podemos ajudar você a encontrar um humano especial.</p>
                        </div>
                        <div class="table-container" id="possible-owners">
                          <h2>Humanos disponíveis</h2>
                          <div id="owners-list">
                          <!-- Lista de possíveis donos aqui -->
                          </div>
                        </div>
                      </div>   
                  </section>`;
        document.getElementById('main-content').innerHTML = content;
        fetchOwners();
        break;
      case 'sobre':
        content = `
                  <section class="content">
                      <h1>Sobre Nós</h1>
                      <p class="text">Adote seu Humano é uma iniciativa que nasceu do amor pelos gatos. Nossa missão é criar um mundo onde cada gato tenha um lar amoroso e um humano dedicado. Trabalhamos incansavelmente para conectar gatos carentes com humanos responsáveis e amorosos.</p>
                  </section>`;
        break;
      case 'servicos':
        content = `
                  <section class="content">
                      <h1>Nossos Serviços</h1>
                      <p class="text">Oferecemos uma variedade de serviços para garantir que cada adoção seja um sucesso:</p>
                      <ul class="services-list">
                          <li>Adoção responsável</li>
                          <li>Orientação e suporte pós-adoção</li>
                          <li>Conselhos de cuidados para gatos</li>
                          <li>Eventos de adoção</li>
                      </ul>
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

  // Extrai a API para gerar HTML com a array de resposta.
  function fetchOwners() {
    fetch('/api/owners')
      .then(response => response.json())
      .then(data => {
        const ownersList = document.getElementById('owners-list');
        ownersList.innerHTML = '';
        data.forEach(owner => {
          const ownerCard = document.createElement('div');
          ownerCard.classList.add('owner-card');
          ownerCard.innerHTML = `     
                      <img src="${owner.img}" alt="Foto de ${owner.name}">
                      <p class="name-field">${owner.name}</p>
                      <p class="email-suf">Email: </p><p class="email-field">${owner.email}</p>             
                  `;
          ownersList.appendChild(ownerCard);
        });
      })
      .catch(error => console.error('Error fetching owners:', error));
  }

  // Carrega conteúdo inicial
  loadContent('home');
});
