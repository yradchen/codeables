class Api::MediaController < ApplicationController

  def index
    @media = Medium.all
  end

  def create
    @medium = Medium.new(medium_params)
    @medium.user_id = current_user.id
    @medium.mediable_id = current_user.id
    @medium.mediable_type = "User"
    if @medium.save
      render "api/media/show"
    else
      render json: @medium.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @medium = Medium.find(params[:id])
    debugger
    if @medium.update(medium_params)
      render 'api/media/show'
    else
      render json: @medium.errors.full_messages, status: 422
    end
  end

  private
  def medium_params
    params.require(:medium).permit(:media, :mediable_id, :mediable_type)
  end
end
