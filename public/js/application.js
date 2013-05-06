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

  // SUBMIT ANSWERS TO QUESTIONS 
  $('#user-results').submit(function(data){
    data.preventDefault();
    $.post('/results', $('#user-results').serialize(), function(data){
    }).done(function(data){
      $("#survey-box").html(data);
    });
  })
setInterval(function(){ 
if (typeof timeAxis !== "undefined"){
  window.setTimeout("window.location.reload();",15000);
$(function () {
        $('#container2').highcharts({
            chart: {
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'Responses Over Time',
                
            },
          
            xAxis: {
                categories: timeAxis
            },
            yAxis: {
                title: {
                    text: 'Amount of Results'
                },
                plotLines: [{
                    value: 0,
                    width: 5,
                    color: '#808080'
                }]
            },
            
            xAxis: {
                title: {
                    text: 'Time Intervals'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },


            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Responses',
                data: adminData
            }]
        });
    });} }, 3500);

if (typeof timeAxis === "undefined"){

$(function () {
        $('#container1').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Chart for ' + questionTitle
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage}%</b>',
              percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'percentage choosen',
                data: questionData
            }]
        });
    });}



// $(function () {
//         $('#container').highcharts({
//             chart: {
//                 type: 'column'
//             },
//             title: {
//                 text: 'Things created per 2 mins'
//             },
//             subtitle: {
//                 text: 'Source: dbc.com'
//             },
//             xAxis: {
//                 categories: timeAxis
//             },
//             yAxis: {
//                 min: 0,
//                 title: {
//                     text: 'results created'
//                 }
//             },
//             tooltip: {
//                 headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//                 pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//                     '<td style="padding:0"><b>{point.y:.1f} results created</b></td></tr>',
//                 footerFormat: '</table>',
//                 shared: true,
//                 useHTML: true
//             },
//             plotOptions: {
//                 column: {
//                     pointPadding: 0.2,
//                     borderWidth: 0
//                 }
//             },
//             series: [{
//                 name: 'Tokyo',
//                 data: adminData
//             }]
//         });
//     });
    



    


});
