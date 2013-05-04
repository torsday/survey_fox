class CreateTableAnswersQuestions < ActiveRecord::Migration
  def change
    create_table :answers_questions do |t|
      t.references :answer
      t.references :question
    end
  end
end
