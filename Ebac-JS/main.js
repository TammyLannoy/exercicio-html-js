const form  = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >=2;
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montande de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: ${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'; 
        document.querySelector('.success-message').innerHTML = mensagemSucesso;

        // Limpar campos após sucesso
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';     
    }
    })
    nomeBeneficiario.addEventListener('keyup', function(e){
        console.log(e.target.value);
        formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.style.border = '1px solid red';
            document.querySelector('.error-message').style.display = 'block'; 
        
        } else {
            nomeBeneficiario.classList.remove = '';
            document.querySelector('.error-message').style.display = 'none'; 
        }
        });
    