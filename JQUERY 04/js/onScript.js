//Outra forma de instanciar eventos sobre o mesmo item utilizando o "on"
$(document).ready(function(){
    $('#botao2').on({
        mouseenter:function(){//mouse sobre
            $(this).css('background-color','red');
        },
        click:function(){
            $(this).css('background-color','blue');
        },
        mouseleave:function(){
            $(this).css('background-color','gray');
        }
    })
})