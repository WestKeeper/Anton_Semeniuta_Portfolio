/* $(document).ready(function(){
  $('#hero__form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(data){
        $('.modal-dialog__title').html(data + ', ваша заявка обработана!');
        $('.modal-thx').addClass('modal-thx_active');
       inp.value = "";
        $(this).find('input[type=text], textarea').val('');
        $(this).find('input[type=tel], textarea').val('');
        $(this).find('input[type=email], textarea').val('');
      }
    });
  });
}); */