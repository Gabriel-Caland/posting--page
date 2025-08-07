// Seletores
const form = document.querySelector('#form-post');
const titulo = document.querySelector('#titulo');
const conteudo = document.querySelector('#conteudo');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

// Evento de envio do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede recarregar a página

  // Cria o objeto com os dados do post
  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  };

  // Faz a requisição POST para a API
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(post => {
      // Renderiza na tela
      renderizadorTitulo.innerHTML = post.title;
      renderizadorConteudo.innerHTML = post.body;

      // Limpa os campos do formulário
      titulo.value = '';
      conteudo.value = '';
    })
    .catch(error => {
      console.error('Erro ao enviar post:', error);
    });
});
