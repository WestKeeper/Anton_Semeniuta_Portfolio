$(document).ready(function(){
  /* Валидация формы */
   $('#hero__form').validate({
    rules:{
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone:{
        required: true
      },
      email:{
        required: true,
        email: true
      }
    },
    messages:{
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Впишите минимум {0} символа!"),
        maxlength: jQuery.validator.format("Имя может содержать максимум {0} символов!")
      },
      phone: {
        required: "Укажите номер телефона"
      },
      email: {
        required: "Нам нужен Ваш e-mail",
        email: "Введите корректный e-mail"
      }
    }
  });

  
  $('.phone').mask('8 (999) 999-99-99'); 
});

$(document).ready(function(){
  $('#hero__form-new').validate({
    rules:{
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone:{
        required: true
      },
      email:{
        required: true,
        email: true
      }
    },
    messages:{
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Впишите минимум {0} символа!"),
        maxlength: jQuery.validator.format("Имя может содержать максимум {0} символов!")
      },
      phone: {
        required: "Укажите номер телефона"
      },
      email: {
        required: "Нам нужен Ваш e-mail",
        email: "Введите корректный e-mail"
      }
    }
    
  });
    /* Маска для телефона */
    $('.phone').mask('8 (999) 999-99-99'); 
});