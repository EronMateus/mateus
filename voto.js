function votar() {
    var idade = parseInt(document.getElementById9("idade").value);
    var res = document.querySelector('section#result')
    var idade = Number(idade.value)
   
    if(idade < 16) {
       res.innerHTML = `<p>Vocé ainda não tem idade para votar</p>`;
    }
    else if (idade < 18){
        res.innerHTML = `<p>Seu voto é facultativo</p>`;
    }
    else if(idade > 65){
        res.innerHTML = (`<p>Seu voto é facultativo</p>`);
    }
    else{
        res.innerHTML = (`<p>Seu voto é Obrigatorio</p>`);
    }
}