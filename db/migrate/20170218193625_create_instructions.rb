class CreateInstructions < ActiveRecord::Migration[5.0]
  def change
    create_table :instructions do |t|
      t.string :step_title, null: false
      t.string :step_detail, null: false
      t.string  :media_url
      t.integer :project_id, null: false
      t.timestamps
    end
    add_index :instructions, :project_id
  end
end
