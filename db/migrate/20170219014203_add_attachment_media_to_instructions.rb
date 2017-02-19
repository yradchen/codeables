class AddAttachmentMediaToInstructions < ActiveRecord::Migration
  def self.up
    change_table :instructions do |t|
      t.attachment :media
    end
  end

  def self.down
    remove_attachment :instructions, :media
  end
end
