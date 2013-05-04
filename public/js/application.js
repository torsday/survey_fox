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
    var addQuestion = "<div class='question_card'><div class= 'question'> <label class='label' for='Question'>Question<\/label><input type='text' class='new-question' name='question[1][description]' placeholder='What is your question?'><br><\/div><div class='answer'><label class='label' for='Answer'>Answer<\/label><input type='text' class='new-answer' name='answer[1][description]' placeholder='What is your answer?'><br><\/div><input type='button' id='add_answer' value='Add Answer'><\/div>"
    $('.question_card').append(addQuestion);    
    $($(this).parents()[0]).append(addAnswer);    
  });

  // ADD ANSWER TO NEW SURVEY PAGE
  $('.question_card').on('click', '#add_answer', function(e){
    e.preventDefault();
    var addAnswer = "<label class='label' for='Answer'>Answer<\/label><input type='text' class='new-answer' name='answer["+ ($('.answer .new-answer').length + 1) + "][description]' placeholder='What is your answer?'><br>"
    $($(this).parents()[0]).append(addAnswer);    
  });
});

