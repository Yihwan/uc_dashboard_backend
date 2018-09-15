class Api::MaterialsController < ApplicationController
  def show
    @material = Material.find(params[:id])
    render json: @material
  end

  def update
    @material = Material.find(params[:id])
    if @material.update(material_params)
      render :show
    else
      render json: @material, status: :unprocessable_entity
    end
  end

  private

  def material_params
    params.require(:material).permit(
      :name, :experiment_id, :measurement
    )
  end
end
