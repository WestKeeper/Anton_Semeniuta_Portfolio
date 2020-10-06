$(document).ready(function(){
  var menuBtn = $('#menu-btn');
  var menuModal = $('#modal-menu');
  var menuPoints = $('.navbar__modal-menu-points');
  var menuA = $('.navbar__model-a');
  var menuText = $('.menu-text');

  menuBtn.on('click',function(e){
    e.preventDefault;
    menuBtn.toggleClass('menu-btn_active');
    menuModal.toggleClass('modal-menu_active');
    menuPoints.toggleClass('navbar__modal-menu-points_active');
    menuText.toggleClass('menu-text_active');
  });

  menuA.on('click',function(e){
    e.preventDefault;
    menuBtn.toggleClass('menu-btn_active');
    menuModal.toggleClass('modal-menu_active');
    menuPoints.toggleClass('navbar__modal-menu-points_active');
  });
  
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
    e.preventDefault();
 });

});