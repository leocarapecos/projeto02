
const form = document.getElementById('formulario')
const contatoLista = []
const nomeLista = []
let linhas = ''

form.addEventListener('submit',function(e){
    
    e.preventDefault()
    
    adicionaLinha()
    atualizaTabela()
    
    
    
    
    
})

function adicionaLinha(){
    
    const nome = window.document.getElementById('nome')
    const tel = window.document.getElementById('numero')
    

    if(nomeLista.includes(nome.value) || contatoLista.includes(tel.value)){
        window.alert('Nome ou Contato ja adicionado!')
    }else{
        nomeLista.push(nome.value)
        contatoLista.push(tel.value)

        let linha = '<tr>'
        linha += `<td>${nome.value}</td>`
        linha += `<td>${tel.value}</td>`
        linha += '</tr>'

        linhas += linha

    }

    
    nome.value = ''
    tel.value = ''
}


    function atualizaTabela(){

        const tabela = document.getElementById('tabvalor')
        tabela.innerHTML = linhas

    }


