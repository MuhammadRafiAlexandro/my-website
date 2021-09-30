// Hamburger icon
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

// Slide show
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 450,
    duration: 600,
    interval: 3000 
});

// Our client Parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Material Boxed
const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed);

// Scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50,
});