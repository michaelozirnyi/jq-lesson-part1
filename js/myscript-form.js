jQuery(function ($) {



    /*$('form').change(function(){

        $('form').val($('#name').val());

        var qwert = $('form').val();
        console.log();
    });
*/





    $('#name').keyup(function(){

        $('#copyName').val($('#name').val());
        var name = $('#name').val();
        console.log('Your name: ' + name);
    });

    /*-----------------------------------*/

    $('#surname').keyup(function(){

        var sur = $('#surname').val();
        console.log('Your surname: ' + sur);
    });

    /*-----------------------------------*/

    $('#email').keyup(function(){

        var em = $('#email').val();
        console.log('Your email: ' + em);
    });

    /*-----------------------------------*/

    $('#email').keyup(function(){
        console.log( $('#email').change());
    });

    /*-----------------------------------*/

    $('input[value=sugar]').on('click', function(){

        if ($('input[value=sugar]').prop('checked'))
        {
            console.log('Вы добавили сахар');
        } else {
            console.log('Без сахара');
        }
    });

    /*-----------------------------------*/

    $('input[value=milk]').on('click', function(){

        if ($('input[value=milk]').prop('checked'))
        {
            console.log('Вы добавили молоко');
        } else {
            console.log('Без молока');
        }
    });
    /*-----------------------------------*/


    /*$('form').keyup(function(){

        /!*if ()*!/
        console.log('Your choice: ' + ddd);
    });*/


    /*-----------------------------------*/

    $('button').on('click', function(){

        $('form').submit(function(){
            var info = $(this).serializeArray();
            console.log(info);
            return false;
        });

        $( "form" ).on( "submit", function( event ) {
            event.preventDefault();
            console.log( $(this).serialize() );
            return false;
        });
    });





   /* $("input:last").prop({"disabled":false, "checked":true})*/

});