$('.text-change span').text()
$('#get-text').text($('.text-change span').text()).css('color','red');
//$('#get-html').html();
$('#change-html').html('<strong>こんばんわ！</strong>').css('color','red');
$('#change-html').html();
$('#get-html').html($('#change-html').html()).css('color','red');

//$('#change-Html').html('<strong>changed!</strong>');
// $('body').css('backgroundColor');
$('#insert>li:eq(0)').prepend('<strong>これがprepend</strong>');
$('#insert>li:eq(3)').append('<strong>これがappend</strong>');
$('#insert>li:eq(0)').before('<h2>これはbefore</h2>');
$('#insert>li:eq(3)').after('<h2>これはafter</h2>');

$('<strong>これがprependTo</strong>').prependTo('#insert-move>li:eq(0)').css('color','red');
$('<strong>これがappendTo</strong>').appendTo('#insert-move>li:eq(3)').css('color','red');
$('.insert-before').insertBefore('#insert-move>li:eq(0)');
$('.insert-after').insertAfter('#insert-move>li:eq(3)');

$('#change-attribute').attr('href','https://www.yahoo.co.jp/').css('color','red');
$('#get-attribute').text($('#google').attr('href')).css('color','red');
$('#change-css').css('color','red');
$('#change-css-three').css({'color':'red','backgroundColor':'yellow','display':'inline'});
$('#change-css-three').css("backgroundColor");

$('#main>li:eq(1)').next().css('color','green');
$('#main>li:eq(2)').prev().css('color','skyblue');
$('#sub>li:eq(1)').siblings().css('color','orange');
