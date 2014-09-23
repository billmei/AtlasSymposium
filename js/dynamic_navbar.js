// Dynamic navbar that detects what section you're on.
// I made my own code for this (below) but this feature has since been replaced by the built-in ScrollSpy feature in Bootstrap.

var registerNavLi = $('#navRegister').parent();
var aboutNavLi = $('a[href="#about"]').parent();
var speakersNavLi = $('a[href="#speakers"]').parent();
var sponsorsNavLi = $('a[href="#sponsors"]').parent();
var geographyNavLi = $('a[href="#location"]').parent(); // Shouldn't use 'location' as a variable name
var faqNavLi = $('a[href="#faq"]').parent();

var registerDiv = $('#header');
var aboutDiv = $('#about');
var speakersDiv = $('#speakers');
var sponsorsDiv = $('#sponsors');
var geographyDiv = $('#location');
var faqDiv = $('#faq');

var toc = [registerNavLi, aboutNavLi, speakersNavLi, sponsorsNavLi, geographyNavLi, faqNavLi];
var tocDiv = [registerDiv, aboutDiv, speakersDiv, sponsorsDiv, geographyDiv, faqDiv]

var lastDiv = 0; // Highlights the last div in view if you scroll into a space between divs.

$(document).on('scroll', function(){
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();

    for (var i = 0; i < toc.length; i++) {
        var divTop = tocDiv[i].offset().top;
        var divBottom = divTop + tocDiv[i].height();

        // Detection for if you are in a certain section, +250px b/c rule of thirds.
        if (divTop <= windowTop + 250) {
            toc[i].addClass('active');
            lastDiv = i;
            if (divBottom < windowTop + 100) {
                toc[i].removeClass('active');
            }
        } else {
            toc[i].removeClass('active');
            toc[lastDiv].addClass('active');
        }
    };
});