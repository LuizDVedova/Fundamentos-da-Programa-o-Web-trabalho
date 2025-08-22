// Inicializa a biblioteca AOS (Animate On Scroll) para aplicar animações nos elementos ao rolar a página
AOS.init();

// Função que exibe uma seção específica com base no botão clicado
function mostrarSecao(secao) {
  // Seleciona o elemento <main> onde o conteúdo será inserido
  const conteudo = document.getElementById("conteudo");

  // Variável que armazenará o HTML da seção escolhida
  let html = "";

  // Verifica qual seção foi solicitada e define o conteúdo correspondente
  switch (secao) {
    case "sobre":
      html = `
        <section data-aos="fade-up">
          <h2>Sobre Mim</h2><br>
          <p>Me chamo Luiz Eduardo Dela Vedova, tenho 23 anos e sou natural de Telêmaco Borba, Paraná. Desde muito cedo, a tecnologia despertou minha curiosidade, não apenas como ferramenta, mas como linguagem que conecta pessoas,
           ideias e soluções. Atualmente, atuo na área de T.I Infraestrutura, onde tenho a oportunidade de lidar com desafios reais, aprimorar minhas habilidades técnicas e contribuir para o funcionamento eficiente dos sistemas que sustentam
            o dia a dia da empresa, este portfólio é um reflexo da minha jornada, dos projetos que desenvolvi e das ideias que ainda estão por vir. Sinta-se à vontade para explorar, conhecer meu trabalho.</p>
        </section>
      `;
      break;

    case "formacao":
      html = `
        <section data-aos="fade-up">
          <h2>Formação</h2><br>
          <ul>
            <li>Cursando Análise e Desenvolvimento de Sistemas</li>
            <p>Atualmente cursando ADS, com foco em desenvolvimento de software, lógica de programação, banco de dados e infraestrutura de TI. Buscando constantemente aprimorar conhecimentos técnicos e acompanhar as tendências do setor.<p><br>
            <li>Inglês</li>
            <p>Nível intermediário — capaz de compreender textos técnicos, participar de conversas e consumir conteúdos em inglês com autonomia.<p><br>
            <li>Espanhol</li>
            <p>Nível intermediário — boa compreensão oral e escrita, com habilidade para comunicação em ambientes profissionais e informais.<p>
          </ul>
        </section>
      `;
      break;

    case "portfolio":
      html = `
        <section data-aos="fade-up">
          <h2>Portfólio</h2>
          <ul>
            <li><a href="https://luizdvedova.github.io/Trabalho-FDS/" target="_blank">Projeto do curso de ADS</a></li>
            <li><a href="https://luizdvedova.github.io/site-kemily/" target="_blank">Página criada para minha namorada</a></li>
          </ul>
        </section>
      `;
      break;

    case "contato":
      html = `
        <section data-aos="fade-up">
          <h2>Contato</h2>
          <form onsubmit="return validarFormulario()">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </section>
      `;
      break;
  }

  // Insere o conteúdo HTML da seção dentro do elemento <main>
  conteudo.innerHTML = html;

  // Atualiza as animações AOS para os novos elementos inseridos
  AOS.refresh();
}

// Função que valida o formulário de contato antes do envio
function validarFormulario() {
  // Obtém e limpa os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Verifica se todos os campos foram preenchidos
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false; // Impede o envio do formulário
  }

  alert("Mensagem enviada com sucesso!");
  return true; // Permite o envio do formulário
}

// Insere o ano atual no rodapé automaticamente
document.getElementById("anoAtual").textContent = new Date().getFullYear();
