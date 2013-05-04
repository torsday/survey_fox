class Survey < ActiveRecord::Base
  has_many :questions
  belongs_to :author, :class_name => "User", :foreign_key => "author_id"
end
