$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    var maxLength = 140;
    var remaining = maxLength - $(this).val().length;
    var counter = $(this).siblings('div').find('.counter');
    counter.text(remaining);

    if (remaining < 0) {
      counter.addClass('invalid');
    } else {
      counter.removeClass('invalid');
    }
  });
});
