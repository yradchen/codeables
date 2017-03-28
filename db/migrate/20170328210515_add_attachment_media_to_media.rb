class AddAttachmentMediaToMedia < ActiveRecord::Migration
  def self.up
    change_table :media do |t|
      t.attachment :media
    end
  end

  def self.down
    remove_attachment :media, :media
  end
end
