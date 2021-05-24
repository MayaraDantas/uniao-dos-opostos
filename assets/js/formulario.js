let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk = false

function validaNome(){
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido - Informe um nome com mais de 3 letras'
        txtNome.style.color = 'red'
        nome.classList.remove('is-valid')
        nome.classList.add('is-invalid')        
    }
    else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nome.classList.remove('is-invalid')
        nome.classList.add('is-valid')
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')   
    }
    else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        emailOk = true
    }
}

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')

    if(mensagem.value.length >= 100){
        txtMensagem.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
        mensagem.classList.remove('is-valid')
        mensagem.classList.add('is-invalid') 
    }
    else {
        txtMensagem.style.display = 'none'
        mensagem.classList.remove('is-invalid')
        mensagem.classList.add('is-valid')
        mensagemOk = true
    }
}

$('#form-contato').submit(function(){
        if(nomeOk == true && emailOk == true && mensagemOk == true){
            alert('Formulário enviado com sucesso!')
            return true
        }
        else{
            alert('Preencha o formulario corretamente antes de enviar...')
            return false
        }
})