function MudaFoto (foto) {
    document.getElementById("icone").src = foto;
    let a = 10; 
}


function calc_total() {
    alert(document.getElementById('cQtd').value)
    let qtd = parseInt(document.getElementById('cQtd').value);
    let tot = qtd * 1500;
    alert(tot)
    document.getElementById('cTot').value = tot;
}
