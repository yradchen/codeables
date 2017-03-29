class Api::MediaController < ApplicationController

  def index
    @media = Media.all
  end

  def create
    @media = Media.new(media_params)
    if @media.save
      render 'api/media/show'
    else
      render json: @media.errors.full_messages, status: 422
    end
  end
end
