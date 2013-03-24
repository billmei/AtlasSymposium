$('#email-submit').on('mouseover', function() {
    $('#email-field').show(50);
    $('#email-submit').val('Send me an email reminder')
});

$('#facebookNav').on('mouseenter', function(){
    $('#facebookText').show(200);
    $(this).on('mouseleave', function (){
        $('#facebookText').hide(50);
    });
});

$('#twitterNav').on('mouseenter', function(){
    $('#twitterText').show(200);
    $(this).on('mouseleave', function (){
        $('#twitterText').hide(50);
    });
});

// Tooltips for abbreviations
$('#SAF').tooltip({"placement":"bottom"});
$('#TRSM').tooltip({"placement":"bottom"});
$('#BBA').tooltip({"placement":"bottom"});
