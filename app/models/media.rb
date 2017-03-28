# == Schema Information
#
# Table name: media
#
#  id                 :integer          not null, primary key
#  mediable_type      :string
#  mediable_id        :integer
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  media_file_name    :string
#  media_content_type :string
#  media_file_size    :integer
#  media_updated_at   :datetime
#

class Media < ApplicationRecord
  validates :user, presence: true
  belongs_to :mediable, polymorphic: true
  belongs_to :user
  
  has_attached_file :media, styles: { thumb: "351x235" }, default_url:
  	"https://s3.amazonaws.com/codeables-DEV/coding-is-fun.jpg"
  validates_attachment_content_type :media, content_type: /\Aimage\/.*\z/
end
