function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const anoN = document.getElementById("ano");
    const res = document.querySelector("#res");
    if(anoN.value.length == 0 || Number(anoN.value) > ano) {
        alert('[ERRO] verifique,os dados digitados...')
    }else {
        const sexo = document.getElementsByName("sex");
        const idade = ano -  Number(anoN.value);
        let genero = '';
        let img = document.createElement('img');
        if(sexo[0].checked) {
            
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criança-m.jpg');
                genero = 'um menino';
            }else if(idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.jpg');
                genero = 'um rapaz';
            }else if(idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.jpg');
                genero = 'um homem';
            }else {
                img.setAttribute('src', 'imagens/idoso-m.jpg');
                genero = 'um idoso';
            }
        }else{
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criança-f.jpg');
                genero = 'uma menina';
            }else if(idade < 21) {
                img.setAttribute('src', 'imagens/jovem-f.jpg');
                genero = 'uma moça';
            }else if(idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.jpg');
                genero = 'uma mulher';
            }else {
                img.setAttribute('src', 'imagens/idoso-f.jpg');
                genero = 'uma idosa';
            }
        }
        res.innerHTML = `${genero} com a idade de: ${idade} anos. <br>`
        res.appendChild(img);
    }
}
