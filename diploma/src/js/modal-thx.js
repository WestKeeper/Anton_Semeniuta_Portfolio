$(document).ready(function(){
  var navOrder = $('#nav-order');
  var countPrice = $('#count__price');
  var countPrice2 = $('#count__price2');
  var countPrice3 = $('#count__price3');
  var countPrice4 = $('#count__price4');
  var countPrice5 = $('#count__price5');
  var countPrice6 = $('#count__price6');
  var orderMaket = $('#order__maket');
  var orderMaket2 = $('#order__maket2');
  var orderMaket3 = $('#order__maket3');
  var footerOrder = $('#footer__order');
  var modal = $('#modal-thx');
  var modal2 = $('#modal-new');
  var close = $('#close-thx');

  navOrder.on('click',function(){
    modal2.addClass('modal-new_active');
  });

  countPrice.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  countPrice2.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  countPrice3.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  countPrice4.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  countPrice5.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  countPrice6.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  orderMaket.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  orderMaket2.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  orderMaket3.on('click',function(){
    modal2.addClass('modal-new_active');
  });
  footerOrder.on('click',function(){
    modal2.addClass('modal-new_active');
  });
/*   $('.hero__button-new').on('click',function(){
    modal2.removeClass('modal-new_active');
    modal.addClass('modal-thx_active');
  }); */
  $('.modal-dialog__close-new').on('click',function(){
    modal2.removeClass('modal-new_active');
  }); 
   close.on('click',function(){
    modal.removeClass('modal-thx_active');
  }); 
});
