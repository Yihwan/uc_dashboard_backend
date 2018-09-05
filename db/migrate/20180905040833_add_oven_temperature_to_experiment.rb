class AddOvenTemperatureToExperiment < ActiveRecord::Migration[5.2]
  def change
    add_column :experiments, :oven_temperature, :integer 
  end
end
