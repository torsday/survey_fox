require 'faker'

num_of_users = 6
num_of_surveys = num_of_users * 10
num_of_questions = num_of_surveys * 12
num_of_answers = num_of_questions * 4

# CREATE USERS
num_of_users.times do
  User.create(:user_name => Faker::Internet.user_name,
    :email => Faker::Internet.email,
    :password => '123456')
end
User.create(:user_name => 'ctorstens', 
  :email => 'c@c.com',
  :password => '123456')
users = User.all

# CREATE ANSWERS
num_of_answers.times do
  Answer.create(:description => Faker::Company.catch_phrase)
end
answers = Answer.all


# CREATE SURVEYS
num_of_surveys.times do
  Survey.create(:author_id => users.sample.id, :title => Faker::Company.bs)
end
surveys = Survey.all

# CREATE QUESTIONS
num_of_questions.times do
  Question.create(:survey_id => surveys.sample.id, :description => Faker::Company.bs)
end
questions = Question.all

# Create Answer-Question Associations
questions.each do |question|
  4.times do
    question.answers << answers.sample
  end
end

# CREATE RESULTS
surveys.each do |survey|
  survey.questions.each do |question|
    Result.create(:respondent_id => users.sample.id,
                  :survey_id => survey.id,
                  :question_id => question.id,
                  :answer_id => question.answers.sample.id)
  end
end