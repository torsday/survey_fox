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
p params
p params
@survey = Survey.create(params[:survey])


Question.create(description: params[:question][:description], survey_id: @survey.id)


end

post '/survey/:id/edit' do

end

delete '/survey/:id/delete' do

end

get '/surveys/:id' do
  @survey = Survey.find(params[:id])
  erb :survey_view
end
