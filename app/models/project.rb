# == Schema Information
#
# Table name: projects
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  description            :text
#  user_id                :integer          not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  cover_img_file_name    :string
#  cover_img_content_type :string
#  cover_img_file_size    :integer
#  cover_img_updated_at   :datetime
#

class Project < ApplicationRecord
  validates :title, :user, presence: true, length: { maximum: 80 }
  # validates :description, presence: true, on: :update

  has_many :comments
  has_attached_file :cover_img, default_url: "coding-is-fun.jpg"
  # :default_url => "/assets/:style/missing_avatar.jpg"
  # codingIsFun: '<%= asset_path("coding-is-fun.jpg") %>'
  # has_attached_file :cover_img
  validates_attachment_content_type :cover_img, content_type: /\Aimage\/.*\z/
  # validates_attachment_presence :cover_img

  belongs_to :user
  has_many :instructions, dependent: :destroy
end
