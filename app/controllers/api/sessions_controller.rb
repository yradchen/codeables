class Api::SessionsController < ApplicationController
  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)

    if @user
      login_user(@user)
      render 'api/users/show'
    else
      render json: ["Sorry, we can't find that account, or your password didn't match. Please try again!"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: ['Session controller needs redirect logic']
    else
      render json: ['Nobody signed in'], status: 404
    end
  end
end
