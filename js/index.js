const postBlock = document.querySelector("#posts")
const btn = document.querySelector("#btn")
const qtdPosts = document.querySelector("#qtdPosts")

async function carregarPosts() {
    postBlock.innerHTML = '';
    let msg = 'carregando...'
    postBlock.innerText = msg
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    postBlock.innerHTML = '';
    const coments = await fetch('https://jsonplaceholder.typicode.com/comments')
    const dataPosts = await posts.json();
   

    const validarInput = ()=>{
        if (qtdPosts.value < 0) {
        alert("O valor digitado não pode ser negativo");
        throw "O número não pode ser negativo.";
        }   else if (qtdPosts.value > 100) {
        alert("Limite máximo de 100");
        throw "O número não pode ser maior que 100.";
        }   else {
        return qtdPosts.value;
        }
    }
    
   // limita a quantidade de posts a serem exibidos
    const postsLimitados = dataPosts.slice(0, validarInput());

    // percorre cada post limitado no array e exibe na tela
    postsLimitados.forEach(post => {
        const postDiv = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');
        const userId = document.createElement('p');

        userId.innerHTML = `Post: ${post.id}`;
        title.innerText = `Titulo:\n ${post.title}`;
        body.innerText = post.body;

        postDiv.appendChild(userId);
        postDiv.appendChild(title);
        postDiv.appendChild(body);
        postBlock.appendChild(postDiv);
    });
}

btn.addEventListener('click', carregarPosts)