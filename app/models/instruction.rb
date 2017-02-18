# == Schema Information
#
# Table name: instructions
#
#  id          :integer          not null, primary key
#  step_title  :string           not null
#  step_detail :string           not null
#  media_url   :string
#  project_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Instruction < ApplicationRecord
  validates :step_title, :step_detail, :project, presence: true

  belongs_to :project


end
