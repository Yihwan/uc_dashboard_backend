# == Schema Information
#
# Table name: materials
#
#  id            :bigint(8)        not null, primary key
#  name          :string
#  experiment_id :integer
#  measurement   :float
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class MaterialTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
