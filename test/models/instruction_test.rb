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

require 'test_helper'

class InstructionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
