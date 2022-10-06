const cep = document.querySelector("#cep");

const showData = (result) => {
    for (const campo in result){
        if(document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
        }
    }
};

cep.addEventListener("blur", async (e)=> { //blur = perder o foco
    let search = cep.value.replace("-", ""); //tira o - e troca por espaço

    if(search.length < 8 || Number(search.value) === NaN){  //NaN - Not a Number
        alert("CEP inválido!");
        cep.focus();
        return;
    }

    const options = {
        method: "GET", //a API exige que seja GET
        mode: "cors", //cors - cross-origin resource sharing - para acessar vários domínios ao mesmo tempo
        cache: "default",
    }

    //axios - biblioteca javascript que usa fetch e XHR
    try {
        const resultado = await fetch(`https://viacep.com.br/ws/${search}/json`, options);

        const json = await resultado.json();
        showData(json);
    } catch (error) {
        console.log("Temos um problema", error.message);
    }
    
});

//     fetch(`https://viacep.com.br/ws/${search}/json`, options)
//     .then(response => {
//         response.json()    //vai tentar converter o que veio em json
//         .then(result => {  //sempre que usar o then, tem que colocar uma função
//             console.log(result);
//         })
//     })
//     .catch(err => {console.log(e.message)})

//outra forma de fazer o código acima é colocar async lá em cima na function e usar await depois



//só posso pegar o que a pessoa digitou, depois de um evento - pq quando a página carrega, ela não tem nada, por isso é necessário o evento
//o fetch é um API nativo do JS, para usá-la é necessário colocar qual o method vai ser usado, mode
//recurso assíncrono retorna uma promise porque não sei se vai funcionar, pois o site é externo
//promise é um recurso que não temos certeza se deu certo ou não, é uma intenção - se der certo, vai retornar o resolve, se der errado, vai retornar o reject
//resolver quer dizer que funcionou, aí usamos a função then, se der errado, usamos o catch


//https://viacep.com.br/ws/01311100/json/

//onde tiver awai, o async deve estar