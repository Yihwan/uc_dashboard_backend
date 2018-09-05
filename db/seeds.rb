require 'csv'

# Materials appear in columns 1 ('B') to 18 ('S') in the csv, zero-indexed.
# Assume that number of potential materials will remain relatively static,
# since experiments have '0' amount of certain materials.
MATERIALS_INDEX = 1..18

path = Rails.root.join('db', 'seed_files', 'seed_file_1.csv')

result = CSV.foreach(path, headers: true, encoding: 'ISO-8859-1').each_with_index do |row, idx|
  row_headers = row.headers
  e = Experiment.new

  e.name = row['Name']
  e.oven_temperature = row['Oven Temperature']
  e.location = row['Location']
  e.operator = row['Operator']
  e.mixing_condition = row['Mixing Condition'].split(" ").last.to_i
  e.date = DateTime.strptime(row['Date'], '%m/%d/%y')
  e.viscosity = row['Viscosity']
  e.cure_time = row['Cure Time']
  e.elongation = row['Elongation']
  e.tensile_strength = row['Tensile Strength']
  e.compression_set = row['Compression Set']

  e.save

  row[MATERIALS_INDEX].each_with_index do |material_measurement, idx|
    next if material_measurement.to_i == 0

    m = Material.new

    m.experiment_id = e.id
    m.name = row_headers[idx + 1]
    m.measurement = material_measurement.to_f

    m.save
  end
end
