<!-- script spoiler -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type='text/javascript'>
//<![CDATA[

$(function(){
    $('.spoiler-text').hide();
    $('.spoiler-toggle').click(function(){
        $(this).next().animate({height: 'toggle'});
        if ($(this).html() == '[+/-] Ver / Ocultar Indice'){
            $(this).html('[+/-] Ver / Ocultar Indice');
        }
        else{
            $(this).html('[+/-] Ver / Ocultar Indice');
    }
    }); // end spoiler-toggle
}); // end document ready

//]]>
</script>
<!-- script spoiler --> 
