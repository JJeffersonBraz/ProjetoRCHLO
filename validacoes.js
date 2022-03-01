function validar() {
	var nome = document.getElementById ('nome').value;
	var email = document.getElementById ('email').value;
	var cpf = document.getElementById ('cpf').value;
	var cvv = document.getElementById ('cvv').value;

	if (nome == "") {
		alert ('Nome obrigatório - Preencha o campo nome');
		formuser.nome.focus();
		return false;
	}

	if (email == "") {
		alert ('Email obrigatório - Preencha o campo email');
		formuser.nome.focus();
		return false;
	}

	if (email.indexOf('@') == -1 ) {
		alert ('Email inválido - Informe um email válido');
		formuser.nome.focus();
		return false;
	}

	if (cpf == "" || cpf.length < 14) {
		alert ('CPF obrigatório - Preencha o campo CPF');
		formuser.nome.focus();
		return false;
	}

	if (cvv == "" || cvv.length < 3) {
		alert ('Padrão inválido para o CVV');
		formuser.nome.focus();
		return false;
	}
}