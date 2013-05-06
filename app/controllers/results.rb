
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
 
 
  erb :admin_chart
end
