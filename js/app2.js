console.log($('div'));
$('div').html('Hello');
console.log($('.div2'));
console.log($('#div3'));
console.log($('#div3, .div2'));
const $ele1 = $('div');
console.log($ele1);
$ele1.html('Hello again');
const $ele2 = $('.div2');
console.log($ele2);
const $ele3 = $('#div3');
console.log($ele3);
const $ele4 = $('#div3, .div2');
console.log($ele4);

$(document).ready(function() {
    // Attach a click event elements with data-toggle attribute
    $("[data-toggle]").click(function() {
        const target = $(this).data("toggle");
        alert(`Toggle ${target}`);
    });

    // Change CSS for the first item in the list
    $("ul li:first-child").css("color", "purple");
});


$('#btn1').click(function() {
    console.log($(this).parent().length);
    console.log($(this).parents().length);
    console.log($(this).parents());
    console.log($(this).parents('.main'));
    console.log($(this).parentsUntil('nav'));
});

$('#btn2').click(function() {
    $(this).parents('.main').each(function(){
        $(this).addClass('parentM');
    });
});