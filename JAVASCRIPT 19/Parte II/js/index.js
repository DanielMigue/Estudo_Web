function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/'+input+'/json/');
    ajax.send();

    ajax.onload = function() {
        document.getElementById('texto').innerHTML = this.responseText;

        //TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText);//converteu em objeto

        //PEGUEI OS VALORES QUE EU QUERIA
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML ="Logradouro:" + logradouro + "<br> Cidade: " + cidade + "<br> Estado:" + estado;
    }
}