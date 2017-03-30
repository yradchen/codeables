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

    end

  end

  private
  def medium_params
    params.require(:medium).permit(:media)
  end
end
