// Tooltips for abbreviations
$('#SAF').tooltip({"placement":"bottom"});
$('#TRSM').tooltip({"placement":"bottom"});
$('#BBA').tooltip({"placement":"bottom"});

$('#mce-CONTMETHOD').on('change', function() {
    $('#mc-embedded-subscribe.teacher-submit').val('Remind me via ' + $(this).val().toLowerCase());
});
