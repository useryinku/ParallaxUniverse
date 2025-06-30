// Enhanced Multi-Layered Parallax Scrolling
$(document).ready(function() {
    // Bind scroll event with performance optimization
    $(window).bind('scroll', function(e) {
        requestTick();
    });
    
    // Initialize parallax on page load
    parallaxScroll();
});

let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(parallaxScroll);
        ticking = true;
    }
}

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    
    // Hero section background layers with different parallax speeds
    $('.layer-1').css('transform', 'translateY(' + (scrolled * 0.15) + 'px)');
    $('.layer-2').css('transform', 'translateY(' + (scrolled * 0.25) + 'px)');
    $('.layer-3').css('transform', 'translateY(' + (scrolled * 0.35) + 'px)');
    $('.layer-4').css('transform', 'translateY(' + (scrolled * 0.45) + 'px)');
    $('.layer-5').css('transform', 'translateY(' + (scrolled * 0.55) + 'px)');
    $('.layer-6').css('transform', 'translateY(' + (scrolled * 0.65) + 'px)');
    
    // Animated star layers
    $('.stars-1').css('transform', 'translateY(' + (scrolled * 0.05) + 'px)');
    $('.stars-2').css('transform', 'translateY(' + (scrolled * 0.08) + 'px)');
    $('.stars-3').css('transform', 'translateY(' + (scrolled * 0.12) + 'px)');
    
    // Individual layer background parallax effects
    $('.nebula-bg').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
    $('.galaxy-bg').css('transform', 'translateY(' + (scrolled * 0.2) + 'px)');
    $('.solar-bg').css('transform', 'translateY(' + (scrolled * 0.4) + 'px)');
    $('.deep-space-bg').css('transform', 'translateY(' + (scrolled * 0.1) + 'px)');
    $('.void-bg').css('transform', 'translateY(' + (scrolled * 0.05) + 'px)');
    
    // Floating objects in Nebula Section
    $('.nebula-section .obj-1').css('transform', 'translateY(' + (300 - (scrolled * 0.6)) + 'px) rotate(' + (scrolled * 0.1) + 'deg)');
    $('.nebula-section .obj-2').css('transform', 'translateY(' + (200 - (scrolled * 0.4)) + 'px) scaleX(-1) rotate(' + (scrolled * -0.08) + 'deg)');
    $('.nebula-section .obj-3').css('transform', 'translateY(' + (400 - (scrolled * 0.8)) + 'px) rotate(' + (scrolled * 0.12) + 'deg)');
    
    // Floating objects in Galaxy Section
    $('.galaxy-section .obj-4').css('transform', 'translateY(' + (500 - (scrolled * 0.5)) + 'px) rotate(' + (scrolled * 0.15) + 'deg)');
    $('.galaxy-section .obj-5').css('transform', 'translateY(' + (350 - (scrolled * 0.7)) + 'px) scaleX(-1) rotate(' + (scrolled * -0.1) + 'deg)');
    $('.galaxy-section .obj-6').css('transform', 'translateY(' + (600 - (scrolled * 0.3)) + 'px) rotate(' + (scrolled * 0.2) + 'deg)');
    $('.galaxy-section .obj-7').css('transform', 'translateY(' + (250 - (scrolled * 0.9)) + 'px) rotate(' + (scrolled * 0.05) + 'deg)');
    
    // Floating objects in Solar Section
    $('.solar-section .obj-8').css('transform', 'translateY(' + (450 - (scrolled * 0.6)) + 'px) rotate(' + (scrolled * 0.18) + 'deg)');
    $('.solar-section .obj-9').css('transform', 'translateY(' + (550 - (scrolled * 0.4)) + 'px) scaleX(-1) rotate(' + (scrolled * -0.12) + 'deg)');
    $('.solar-section .obj-10').css('transform', 'translateY(' + (300 - (scrolled * 0.8)) + 'px) rotate(' + (scrolled * 0.25) + 'deg)');
    
    // Floating objects in Deep Space Section
    $('.deep-space-section .obj-11').css('transform', 'translateY(' + (700 - (scrolled * 0.35)) + 'px) rotate(' + (scrolled * 0.08) + 'deg)');
    $('.deep-space-section .obj-12').css('transform', 'translateY(' + (400 - (scrolled * 0.75)) + 'px) scaleX(-1) rotate(' + (scrolled * -0.15) + 'deg)');
    $('.deep-space-section .obj-13').css('transform', 'translateY(' + (800 - (scrolled * 0.25)) + 'px) rotate(' + (scrolled * 0.3) + 'deg)');
    $('.deep-space-section .obj-14').css('transform', 'translateY(' + (350 - (scrolled * 0.65)) + 'px) rotate(' + (scrolled * 0.1) + 'deg)');
    
    // Hero title fade effect based on scroll position
    var titleOpacity = Math.max(0, 1 - (scrolled / 600));
    $('h1').css('opacity', titleOpacity);
    $('.subtitle').css('opacity', titleOpacity);
    
    // Dynamic color shifting for main title
    var hue = (scrolled * 0.3) % 360;
    $('h1').css('filter', 'hue-rotate(' + hue + 'deg)');
    
    // Text content parallax - subtle movement for depth
    $('.text-content').each(function(index) {
        var speed = 0.1 + (index * 0.05);
        $(this).css('transform', 'translateY(' + (scrolled * speed) + 'px)');
    });
    
    ticking = false;
}

$(document).mousemove(function(e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    
    // Calculate mouse position as percentage
    var xPercent = (mouseX / windowWidth) - 0.5;
    var yPercent = (mouseY / windowHeight) - 0.5;
    
    // Apply subtle mouse parallax to floating objects
    $('.floating-object').each(function(index) {
        var multiplier = (index % 3 + 1) * 5;
        
        // Apply transform based on mouse position
        var translateX = xPercent * multiplier;
        var translateY = yPercent * multiplier;
        
        $(this).css({
            'transform': 'translate(' + translateX + 'px, ' + translateY + 'px)'
        });
    });
});