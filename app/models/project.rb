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
#  publish                :boolean          default("false")
#

class Project < ApplicationRecord
  validates :title, :user, presence: true, length: { maximum: 80 }
  belongs_to :user
  has_many :comments
  has_many :instructions, dependent: :destroy

  has_attached_file :cover_img, styles: { thumb: "351x235" }, default_url:
  	"https://s3.amazonaws.com/codeables-DEV/coding-is-fun.jpg"
  validates_attachment_content_type :cover_img, content_type: /\Aimage\/.*\z/

  def self.find_by_title(title)
    title = title.downcase
    Project.includes(:user).where("lower(title) LIKE ?", "%#{title}%")
  end

  def self.find_by_user_id(user_id)
    Project.includes(:user).where("user_id = ?", user_id)
  end

  def self.find_by_published()
    Project.includes(:user).where("publish = '#{true}'").all
  end

end
