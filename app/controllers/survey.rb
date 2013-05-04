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
  params[:question].each_pair do |k_num,descrip|
    @the_survey.questions << Question.create(:description => descrip['description'])
  end
  redirect '/survey/new'
end

post '/survey/:id/edit' do

end

delete '/survey/:id/delete' do

end

get '/survey/:id' do
  @survey = Survey.find(params[:id])
  erb :survey_view
end
