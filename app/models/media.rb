# == Schema Information
#
# Table name: media
#
#  id            :integer          not null, primary key
#  mediable_type :string
#  mediable_id   :integer
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Media < ApplicationRecord
end
