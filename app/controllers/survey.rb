# DISPLAY_SURVEYS

get '/surveys'  do

end

# get '/surveys/:id' do

# end

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
@survey = Survey.create(params[:survey])
p "this is your survey id"
p @survey
Question.create(description: params[:question][:description], survey_id: @survey.id)
puts "hello"

end

post '/survey/:id/edit' do

end

delete '/survey/:id/delete' do

end
