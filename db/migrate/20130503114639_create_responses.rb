class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.references :question
      t.references :choice
      t.references :respondent
    end
    add_index :responses, [:question_id, :respondent_id], :unique => true
  end
end

# may have to come back to check if :respondent_id should just be :respondent
