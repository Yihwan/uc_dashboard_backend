class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :name
      t.integer :experiment_id 
      t.float :measurement

      t.timestamps
    end
  end
end
