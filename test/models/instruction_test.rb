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

require 'test_helper'

class InstructionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
