jQuery(function ($) {

    $('#add').on('click', function(){
        $('button').addClass('btn-blue');
    });

    /*-----------------------------------*/

    $('#remove').on('click', function(){
        $('button').removeClass('btn-blue');
    });

    /*-----------------------------------*/

    $('#toggle').on('click', function(){
        $(this).toggleClass('btn-lk btn-orange');
    });

    /*-----------------------------------*/

    $('#get').on('click', function(){

        var typ, attrId;
        typ = $('#get').attr('type');
        attrId = $('#get').attr('id');

        console.log('type: ' + typ, 'id: ' + attrId);
    });

    /*-----------------------------------*/

    $('#set').on('click', function(){

        var value1 = 'submit',
            value2 = 'color: purple';

        $('#set').attr({type:value1, style:value2});
    });

    /*-----------------------------------*/

    $('#alert').on('click', function(){
        alert('You pushed a button!');
    });

    /*-----------------------------------*/

    $('#trig').on('click', function(){
        $('#alert').trigger( "click" );
    });

    /*-----------------------------------*/

    $("#clone").on('click', function(){

        var textClone = $("#clone").text();
        $("#clone").clone(this).text( textClone + '(cloned)').insertAfter($("#clone"));
    });

    /*-----------------------------------*/

    $('#closest').on('click', function(){

        var parent = $('#closest').parent();
        console.log(parent);
    });

    /*-----------------------------------*/

    $("#each").on('click', function(){               /*!!!!!!!!  Need help here!!!!!!!!!!!!*/

        var textBtn = $("button").text();
        console.log(textBtn);
    });

    /*-----------------------------------*/

    $('#find').on('click', function(){             /*!!!!!!!!!1!  do it`s correct???!!!!!*/
        console.log($('body #find'));

    });
    /*-----------------------------------*/
    
    $('#fadeIn').on('click', function(){
        $(".in").fadeIn(400)
    });

    /*-----------------------------------*/

    $('#fadeOut').on('click', function(){
        $(".out").fadeOut(400)
    });

    /*-----------------------------------*/

    $('#hide').on('click', function(){
        $(".hide").hide(700)
    });

    /*-----------------------------------*/

    $('#show').on('click', function(){
        $(".show").show(700)
    });

    /*-----------------------------------*/

    $('#data').on('click', function(){            /*!!!!!!!!!!   Need help here   !!!!!*/

        var hei = $('#data').outerHeight(),
            wid = $('#data').outerWidth(),
            of = $('#data').offset(),
            /*atr = $('#data').attr(),*/
            par = $('#data').parent(),
            prev = $('#data').prev(),
            nex = $('#data').next(),
            tex = $('#data').text();

        console.log(hei, wid, of, par, prev, nex, tex);
    });
});


