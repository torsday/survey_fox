$(document).ready(function() {
  
  // LOGOUT
  $('a#sign-out').on("click", function (e) {
    e.preventDefault();
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });

  // ADD QUESTION TO NEW SURVEY PAGE
  $('.card_box').on('click', '#add_question', function(e){
    e.preventDefault();
    // console.log("HELLO");
    // console.log(this);
    var addQuestion = "</br><div class='question_card'><div class= 'question'> <label class='label' for='Question'>Question<\/label><input type='text' class='new-question' name='question["+ ($('.question .new-question').length + 1) + "][description]' placeholder='What is your question?'><br><\/div><div class='answers'><div class='answer'><label class='label' for='Answer'>Answer<\/label><input type='text' class='new-answer' name='answer[1][description]' placeholder='What is your answer?'><br><\/div><\/div><input type='button' id='add_answer' value='Add Answer'><\/div>";
    $('.card_box').children('.question_card').last().append(addQuestion);
    
    // console.log($('.card_box:nth-last-child(1)'));
    // $('.card_box:nth-last-child(1)').append(addQuestion);    
    // $($('.card_box').children('.question_card')[0]).append(addQuestion);

  });

  // ADD ANSWER TO NEW SURVEY PAGE
  $('.card_box').on('click', '#add_answer', function(e){
    e.preventDefault();
    var addAnswer = "<div class='answer'><label class='label' for='Answer'>Answer<\/label><input type='text' class='new-answer' name='answer["+ ($('.answer .new-answer').length + 1) + "][description]' placeholder='What is your answer?'><br><\/div>";
    // console.log($($(this).parents())).children();
    var testing = $($(this).parents()[0]);
    var the_click = this;
    var parents_of_click = $(the_click).parents();
    var the_question_card = parents_of_click[0];
    var answers_div_of_click = $(this).siblings('.answers');
    console.log($(this).siblings);
    console.log(answers_div_of_click);
    answers_div_of_click.append(addAnswer);    
  });

});

