
post "/results" do
  content_type :json
  params[:results].each do |key, value|
    Result.create(params[:results][key])
  end
  
  @user = User.find(session[:user_id])
  (erb :completed_survey, :layout =>false).to_json
  # {:hello => "hi"}.to_json
end
