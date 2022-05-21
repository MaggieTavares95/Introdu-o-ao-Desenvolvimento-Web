function registerUser(){
    let login = document.querySelector('.login');
    let password = document.querySelector('.password');
    userList = JSON.parse(localStorage.getItem('') || []);
    userList.push({
        login: login.value,
        password: password.value
    });
    localStorage.setItem('userList', JSON.stringify(userList));
    alert('Cadastro realizado com Sucesso!')
};

function loginUser(){
    let emailUser = document.querySelector('.emailUser');
    let passwordUser = document.querySelector('.passwordUser');
    let userList = [];
    let userValid = {
        user: '',
        password: ''
    };

    userList = JSON.parse(localStorage.getItem('userList'));
    userList.forEach((item) => {
        if(emailUser.value == item.login && passwordUser.value == item.password) {
            userValid = {
                user: item.login,
                password: item.password
            };
        };
    });
    
    if(loginUser.value == userValid.user && passwordUser.value == userValid.password) {
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos");
    };
};