class CreateAnswerTable < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :description
    end
  end
end
