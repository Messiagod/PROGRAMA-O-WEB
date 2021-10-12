

function meuEscopo () {
    const form = document.querySelector('.form'); // variavel nome = local de onde estamos pegando.selecionador('selecionador igual do css')
    const resultado = document.querySelector('.resultado');
    const resultadoQuadra = document.querySelector('.resultadoQuadra');
    const resultadoHora = document.querySelector('.resultadoHora');
    const resultadoCampo = document.querySelector('.resultadoCampo');

    const pessoas = []; //criamos um array vazio para que o formulario preencha ele

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');  //variavel nome = local que estamos pegando, no caso no div/form FORM
        const dia = form.querySelector('.dia');
        const hora = form.querySelector('.hora');
        const campo = form.querySelector('.campo');

        pessoas.push({     //selecionamos nossa variavel com array , demos um push inserindo os objetos
            nome: nome.value,
            dia: dia.value,
            hora: hora.value,
            campo: campo.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}<p/>`;
        resultadoQuadra.innerHTML += `<p>${hora.value}<p/>`;
        resultadoHora.innerHTML += `<p>${dia.value}<p/>`;
        resultadoCampo.innerHTML += `<p>${campo.value}<p/>`;

    };

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();