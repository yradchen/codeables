class CreateMedia < ActiveRecord::Migration[5.0]
  def change
    create_table :media do |t|
      t.references :mediable, polymorphic: true, index: true
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :media, :user_id
  end
end
