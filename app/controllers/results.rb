
post "/results" do
p params
# @test =Result.create(params[:result])
# p @test

params[:results].each do |key, value|
  Result.create(params[:results][key])
end

end
