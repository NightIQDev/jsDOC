/*$(function(){
    var numero = 0

    $('.bt1').click(()=>{
        numero++
        console.log(numero)
        $('p').css({'background':'yellow'})
        if (numero == 2){
            $('p').css({'background':'blue'}) 
        }
        if (numero == 3){
            $('p').css({'background':'red'}) 
            if (numero == 3) {
                numero = 0
            }
        }      
    })

    $('.bt2').click(()=>{
        $('p').css({'background':'white'})
        numero = 0  
    })

    
})



$(() =>{

    let numero = 0;
    let numeroVa = 0;

    $('.bt1').dblclick(()=>{
        numeroVa++
        $('.cock1').show()
        if(numeroVa == 2){
            $('.cock2').show()
        }
        console.log(numero)
    })

    $('.bt2').click(()=>{
        numero++
        $('.cock1').hide()

        if(numero == 2){
            $('.cock2').hide()
        }
        console.log(numero)
    })
})



$(function(){

    $('.bt1').mouseenter(()=>{
        $('.cock1').show()
    })

    $('.bt2').mouseleave(()=>{
        $('.cock1').hide()
    })
})


$(function(){

    $('.bt1').mouseenter(()=>{
        $('.cock1').fadeIn()
    })

    $('.bt2').mouseleave(()=>{
        $('.cock1').fadeOut()
    })
})


$(function(){

    $('.bt1').mouseenter(()=>{
        $('.cock1').slideDown()
    })

    $('.bt2').mouseleave(()=>{
        $('.cock1').slideUp()
    })
})




$(function(){

    $('.bt1').click(()=>{
        $('.cock1').slideDown()
        $('.cock1').animate({width: '777px'})
    })

    
    $('.bt2').mouseleave(()=>{
        $('.cock1').slideUp()
    })
})



$(function(){

    $('.bt1').click(()=>{
        alert($('.cock2').html())
    })
 
    $('.bt2').click(()=>{
        alert($('.cock1').text())
    })

    $('.bt3').click(()=>{
       alert( $('.cock3').attr('title'))
    })
})



$('.bt1').click(()=>{
    $('.cock2').html('hola <h1>PROGRAMADORES</h1>')
})

$('.bt1').click(()=>{
    $('.cock2').append('hola <h1>PROGRAMADORES</h1>')
})

$('.bt1').click(()=>{
    $('.cock2').prepend('hola <h1>PROGRAMADORES</h1>')
})

$('.bt1').click(()=>{
    $('.cock2').after('hola <h1>PROGRAMADORES</h1>')
})

$('.bt1').click(()=>{
    $('.cock2').before('hola <h1>PROGRAMADORES</h1>')
})

$('.bt1').click(()=>{
    $('.cock2').remove()
})

$('.bt1').click(()=>{
    $('.cock2').empty()
})




$('.bt1').click(()=>{
    $('.cock2').addClass('red')
})

$('.bt1').click(()=>{
    $('.cock1').addClass('blue')
})

$('.bt1').click(()=>{
    $('.cock1').removeClass('blue')
})


$('.bt1').click(()=>{
    $('.cock1').toggleClass('blue')
})


$('.bt1').click(()=>{
    $('.cock1').toggleClass('blue')
})

*/