$(document).ready(function() {
  $('a#sign-out').on("click", function (e) {
    e.preventDefault();
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });
  $('#new_survey').on('click', '#add_question', function(e){
    e.preventDefault();
    var addQuestion = " <label class=\"label\" for=\"Question\">Question<\/label><input type=\"text\" class=\"new-question\" name=\"question["+ ($('.question .new-question').length + 1) + "][description]\" placeholder=\"What is your question?\"><br>"
    $('.question').prepend(addQuestion);     
  });
});

