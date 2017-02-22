# == Schema Information
#
# Table name: instructions
#
#  id                 :integer          not null, primary key
#  step_title         :string           not null
#  step_detail        :string           not null
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
# :step_detail
  has_attached_file :media, default_url: ""
  validates_attachment_content_type :media, content_type: /\Aimage\/.*\z/

  belongs_to :project


end
