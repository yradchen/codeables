class Api::MediaController < ApplicationController

  def index
    @media = Medium.all
  end

  def create
    @media = Medium.new(media_params)
    if @media.save
      render 'api/media/show'
    else
      render json: @media.errors.full_messages, status: 422
    end
  end
end
