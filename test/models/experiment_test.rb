# == Schema Information
#
# Table name: experiments
#
#  id               :bigint(8)        not null, primary key
#  name             :string
#  location         :string
#  operator         :string
#  mixing_condition :integer
#  date             :date
#  viscosity        :float
#  cure_time        :float
#  elongation       :float
#  tensile_strength :float
#  compression_set  :float
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  oven_temperature :integer
#

require 'test_helper'

class ExperimentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
