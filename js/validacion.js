function validacion()
{
    var total=5;
    var correctas=0;
    var formulario = document.forms["cuestionario"];
    var respuestas = ["c", "d", "a", "b", "b"];

    for(var i =1; i<=total; i++)
    {
        if(formulario["p" + i].value === null || formulario["p" + i].value ==="")
        {
            alert('Responde la pregunta ' + i );
            return false;
        }
        else
        {
            if(formulario["p" + i].value === respuestas[i-1])
            {
                correctas++;
            }
        }
    }
    var resultado= document.getElementById('resultado');
    resultado.innerHTML = '<h3> Respondiste bien <span>'+ correctas +' </span> de <span>' + total + ' preguntas. </span></h3>';

    //alert('Respondiste bien '+ correctas + ' preguntas');

    var porcentaje;
    porcentaje= (correctas*100)/total;

    alert('Tu porcentaje de aciertos fue de ' + porcentaje+' %');

    return false;
}

function validacionVF()
{
    var total=15;
    var correctas=0;
    var formulario = document.forms["VerFal"];
    var respuestas = ["f","v","f","v","v","f","f","f","v","v","f","f","v","f","f"];

    for(var i =1; i<=total; i++)
    {
        if(formulario["vf" + i].value === null || formulario["vf" + i].value ==="")
        {
            alert('Responde la pregunta ' + i );
            return false;
        }
        else
        {
            if(formulario["vf" + i].value === respuestas[i-1])
            {
                correctas++;
            }
        }
    }

    var resultado= document.getElementById('resultado');
    resultado.innerHTML = '<h3> Respondiste bien <span>'+ correctas +' </span> de <span>' + total + ' preguntas. </span></h3>'

    
    var porcentaje;
    porcentaje= (correctas*100)/total;
    var porcentajeTotal = porcentaje.toFixed(2);
    

    //alert('tu porcentaje de aciertos fue de ' + porcentajeTotal+'%');

    if(porcentajeTotal<=40)
    {
        alert('Internauta, debe ponerse a estudiar más. Pocerntaje de aciertos= '+porcentajeTotal+'%');
    }
    else
    {
        if(porcentajeTotal>40 && porcentajeTotal<=69)
        {
            alert('Internauta, está bien pero debe ponerse a estudiar más. Pocerntaje de aciertos= '+porcentajeTotal+'%');
        }
        else
        {
            if(porcentajeTotal>69 && porcentajeTotal<=70)
            {
                alert('Internauta, Buenas respuestas. Pocerntaje de aciertos= '+porcentajeTotal+'%');
            }
            else
            {
                if(porcentajeTotal>70)
                {
                    alert('Internauta, Muy buenas respuestas. Pocerntaje de aciertos= '+porcentajeTotal+'%');
                }
            }
        }
    }

    //alert('Respondiste bien '+ correctas + ' preguntas');



    return false;
}

/*$(document).ready(function()
{
    $('.scrolltop').click(function()
    {
        $('body, html'). animate({
            scrollTop: '0px'
        });
    })
})*/