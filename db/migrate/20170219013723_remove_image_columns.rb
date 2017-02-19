class RemoveImageColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :cover_img
    remove_column :instructions, :media_url
  end
end
