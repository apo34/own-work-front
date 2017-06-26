$(document).ready(function () {
  $('.my-menu .nav-pills a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    console.log(this);
  });
 
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: false

  })
  console.log($('.owl-carousel'))
});