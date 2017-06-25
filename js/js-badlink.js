$(document).ready(function(){
  $('.js-badlink').each(function(){
    $(this).find('a').each(function(){
      var self = this;
      $.ajax({
        url:$(this).attr('href'),
        statusCode: {
          404: function() {
            $(self).css('background-color', 'red');
          }
        }
      });
    });
  });
});
