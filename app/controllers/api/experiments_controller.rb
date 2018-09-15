class Api::ExperimentsController < ApplicationController
  def index
    @experiments = Experiment.all
    render json: @experiments, include: [:materials]
  end

  def show
    @experiment = Experiment.find(params[:id])
    render json: @experiment, include: [:materials]
  end

  def update
    @experiment = Experiment.find(params[:id])
    @experiment.update(experiment_params)
  end

  private

  def experiment_params
    params.require(:experiment).permit(
      :name,
      :location,
      :operator,
      :mixing_condition,
      :date,
      :viscosity,
      :cure_time,
      :elongation,
      :tensile_strength,
      :compression_set,
      :oven_temperature
    )
  end
end
