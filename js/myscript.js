jQuery(function ($) {

    $('#add').on('click', function(){
        $('button').addClass('btn-blue');
    });

    $('#remove').on('click', function(){
        $('button').removeClass('btn-blue');
    });

    $('#toggle').on('click', function(){
        $(this).toggleClass('btn-lk btn-orange');
    });



});