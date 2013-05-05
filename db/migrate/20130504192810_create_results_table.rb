class CreateResultsTable < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.references :respondent
      t.references :survey
      t.references :answer
      t.references :question
    end
  end
end
