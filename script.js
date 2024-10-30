/*Adicionar matérias*/
const novaMateriaInput = document.getElementById('novaMateria');
const listaMaterias = document.getElementById('listaDeMaterias');

function novaMateria() {
  const novaMateria = novaMateriaInput.value;
  if (novaMateria) {
    const li = document.createElement('li');
    li.textContent = novaMateria;
    listaMaterias.appendChild(li);
    novaMateriaInput.value = '';
  }
}


/*Validar o CPF*/
function formatarCPF(input) {
  input.value = input.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

function validarCPF(cpf) {
  if (cpf.length !== 11 ||
    cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" ||
    cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" ||
    cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") return false;

  let soma = 0, resto;
  for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

const form = document.getElementById('form-cpf');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
  if (!validarCPF(cpf)) {
    alert('CPF inválido');
  } else {
    alert('CPF válido');
  }
});


/*Validar E-mail*/
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const emailForm = document.getElementById('form-email');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  if (validarEmail(email)) {
    alert('E-mail válido!');
  } else {
    alert('E-mail inválido!');
  }
});
