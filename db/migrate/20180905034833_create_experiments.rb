class CreateExperiments < ActiveRecord::Migration[5.2]
  def change
    create_table :experiments do |t|
      t.string :name
      t.string :location
      t.string :operator
      t.integer :mixing_condition
      t.date :date
      t.float :viscosity
      t.float :cure_time
      t.float :elongation
      t.float :tensile_strength
      t.float :compression_set

      t.timestamps
    end
  end
end
