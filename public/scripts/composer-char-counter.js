$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    var maxLength = 140;
    var remaining = maxLength - $(this).val().length;
    $(this).siblings('div').find('.counter').text(remaining);
  });
});
