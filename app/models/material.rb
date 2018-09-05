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

class Material < ApplicationRecord
  belongs_to :experiment,
    class_name: 'Experiment',
    primary_key: :id,
    foreign_key: :experiment_id
end
