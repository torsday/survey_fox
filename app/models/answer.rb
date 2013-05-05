class Answer < ActiveRecord::Base
  has_and_belongs_to_many :questions
  has_many :results
end
