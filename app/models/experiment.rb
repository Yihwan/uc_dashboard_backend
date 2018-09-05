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

class Experiment < ApplicationRecord
  has_many :materials,
    class_name: 'Material',
    primary_key: :id,
    foreign_key: :experiment_id
end
