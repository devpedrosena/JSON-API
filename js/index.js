const postBlock = document.querySelector("#posts")
const btn = document.querySelector("#btn")
const qtdPosts = document.querySelector("#qtdPosts")

async function carregarPosts() {
    postBlock.innerHTML = '';
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

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
    const postsLimitados = data.slice(0, validarInput());

    // percorre cada post limitado no array e exibe na tela
    postsLimitados.forEach(post => {
        const postDiv = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');
        const userId = document.createElement('p');

        userId.innerHTML = `Id: ${post.id}`;
        title.innerText = `Titulo:\n ${post.title}`;
        body.innerText = post.body;

        postDiv.appendChild(userId);
        postDiv.appendChild(title);
        postDiv.appendChild(body);
        postBlock.appendChild(postDiv);
    });
}

btn.addEventListener('click', carregarPosts)