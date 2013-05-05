$(document).ready(function () {

  // LOGOUT
  $('a#sign-out').on("click", function (e) {
    e.preventDefault();
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });

  // ADD QUESTION TO NEW SURVEY PAGE
  $('.card_box').on('click', '#add_question', function (e) {
    e.preventDefault();
    var addQuestion = "</br><div class='question_card'><div class= 'question'> <label class='label' for='Question'>Question<\/label><input type='text' class='new-question' name='question[" + ($('.question .new-question').length + 1) + "][description]' placeholder='What is your question?'><br><\/div><div class='answers'><div class='answer'><label class='label' for='Answer'>Answer<\/label><input type='text' class='new-answer' name='question[" + ($('.question .new-question').length + 1) + "][answers][]' placeholder='What is your answer?'><br><\/div><\/div><input type='button' id='add_answer' value='Add Answer'><\/div>";
    $('.card_box').children('#add_question').before(addQuestion);
  });

  // ADD ANSWER TO NEW SURVEY PAGE
  $('.card_box').on('click', '#add_answer', function (e) {
    e.preventDefault();
    var answers_div_of_click = $(this).siblings('.answers');
    var the_question_info = answers_div_of_click.parents().first().children('.question').children('input').attr('name');
    var the_question_key = the_question_info.substring(0, the_question_info.length - 13);
    var question_num = the_question_key.replace(/\D+/g, '');
    var addAnswer = "<div class='answer'><label class='label' for='Answer'>Answer<\/label><input type='text' class='new-answer' name='question[" + question_num + "][answers][]' placeholder='What is your answer?'><br><\/div>";
    answers_div_of_click.append(addAnswer);
  });

});

