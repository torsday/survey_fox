
post "/results" do
  content_type :json
  params[:results].each do |key, value|
    Result.create(params[:results][key])
  end
  
  @user = User.find(session[:user_id])
  (erb :completed_survey, :layout =>false).to_json
end


get '/survey/:id/results' do
  @survey = Survey.find(params[:id])
  erb :survey_results
end


get '/question/:id/chart' do
  @question = Question.find(params[:id])

  erb :question_chart
end

get '/admin/chart' do

  @num = ((Result.last.created_at - Result.first.created_at) / 60 + 1).floor
  
  @admin_data = []
  interval = 60
  start = Result.first.created_at
  (@num + 1).times do
  @admin_data << Result.where(:created_at => (start)..(start + interval)).count
  interval += 60
  p "this is your start interval"
  p start
  start += 60
  end
  p "find me"
  p @admin_data


  erb :admin_chart
end
