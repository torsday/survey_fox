class Result < ActiveRecord::Base
  belongs_to :respondent, :class_name => "User", :foreign_key => 'respondent_id'
  belongs_to :survey
  belongs_to :question
  belongs_to :answer
end
