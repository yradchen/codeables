# == Schema Information
#
# Table name: instructions
#
#  id                 :integer          not null, primary key
#  step_title         :string           not null
#  step_detail        :string
#  project_id         :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  media_file_name    :string
#  media_content_type :string
#  media_file_size    :integer
#  media_updated_at   :datetime
#

class Instruction < ApplicationRecord
  validates :step_title, :project, presence: true
  validates :step_detail, presence: true, on: :update
  has_attached_file :media, default_url: ""
  validates_attachment_content_type :media, content_type: /\Aimage\/.*\z/
  has_one :medium, as: :mediable
  belongs_to :project

  # has_attached_file :medium, styles: { thumb: "351x235" }, default_url:
  #   "https://s3.amazonaws.com/codeables-DEV/coding-is-fun.jpg"

end
