class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :cover_img, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :projects, :title
    add_index :projects, :user_id
  end
end
