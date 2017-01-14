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

    $("#each").on('click', function(){

        var textBtn = $("button"),
            mas = textBtn.map(function(){
                return $(this).text();
    }).get();
        console.log(mas);
    });


    /*-----------------------------------*/

    $('#find').on('click', function(){
        console.log($('body').find('#find'))

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

    $('#dataAboutMe').on('click', function(){            /*!!!!!!!!!!   Need help here   !!!!!*/

        var hei = $('#dataAboutMe').outerHeight(),
            wid = $('#dataAboutMe').outerWidth(),
            of = $('#dataAboutMe').offset(),
            /*atr = $('#dataAboutMe').attr(),*/
            par = $('#dataAboutMe').parent(),
            prev = $('#dataAboutMe').prev(),
            nex = $('#dataAboutMe').next(),
            tex = $('#dataAboutMe').text();

        console.log(hei, wid, of, par, prev, nex, tex);
    });



    /*------------ANOTHER METODS--------------------*/

   /* $('#data').on('click', function(){
        $("#set").data("value2");
    });*/

    $('#detach').on('click', function(){
        $("#detach").detach();
    });

    /*-----------------------------------*/
    $('#eq').on('click', function(){
        console.log($("button").eq(13));
    });

    /*-----------------------------------*/
    $('#hasClass').on('click', function(){
        if($("button").hasClass("btn-blue"))
            console.log('Кнопочки синие');
    });

    /*-----------------------------------*/
    $('#html').on('click', function(){
        $('#htmlChan').html("<p>Заменили кнопку на текст</p>");
    });

    /*-----------------------------------*/
    $('#index').on('click', function(){
        $('#index').index()
        console.log(('Index: ' + $('#index').index()));
    });

    /*-----------------------------------*/
    $('#off').on('click', function(){
        $('#add').off('click');
    });

    /*-----------------------------------*/
    $('#on').on('click', function(){
        console.log('Проверили метод .on()');
    });

    /*-----------------------------------*/
    $('#rem').on('click', function(){
        $('#set').removeAttr('style');
    });

    /*-----------------------------------*/
    $(window).resize(function(){
        console.log('Размеры окна браузера изменены.');
    });

    /*-----------------------------------*/
    $('#scroll').on('click', function(){
        $("#main").scroll();

    });

    /*-----------------------------------*/
    $('#scrollTop').on('click', function(){
        $("body").scrollTop(0);
    });

    /*-----------------------------------*/
    $('#slideUp').on('click', function(){
        $("#slideTog").slideUp();
    });

    /*-----------------------------------*/
    $('#slideD').on('click', function(){
        $("#slideTog").slideDown();
    });


    /*-----------------------------------*/
    $('#slideTog').on('click', function(){
        $("#main").slideToggle();
    });

});


