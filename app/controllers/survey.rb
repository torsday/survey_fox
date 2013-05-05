# DISPLAY_SURVEYS

get '/surveys'  do
  @surveys = Survey.all
  p @surveys
  erb :surveys
end



# post '/survey/:id' do 

# end

get '/survey/:id/results' do

end



# CREATE _ EDIT _ DELETE

get '/survey/new' do
  p session
  @user = User.find(session[:user_id])
  erb :survey_new
end

post '/survey/new' do
  @the_survey = Survey.create(params[:survey])

  params[:question].each_pair do |k_num,value|
    the_question = Question.new(:description => value['description']) 
    params[:question][k_num.to_s]['answers'].each do |answer_descrip|
      the_question.answers << Answer.create(:description => answer_descrip)
    end
      # value['answers'].each do |answer|
      #   the_question.answers << Answer.create(:description => answer)
      # end
    the_question.save
    @the_survey.questions << the_question
  end
  # p params
  # p @the_survey
  redirect '/survey/new'
end

post '/survey/:id/edit' do

end

delete '/survey/:id/delete' do

end

get '/survey/:id' do
  @survey = Survey.find(params[:id])
  @user = User.find(session[:user_id])
  erb :survey_view
end
