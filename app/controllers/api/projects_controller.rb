class Api::ProjectsController < ApplicationController

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.includes(:instructions).find(params[:id])
  end

  def index
    @projects = Project.includes(:user).all
  end

  def update
    @project = Project.find(params[:id])
    if @project.user_id != current_user.id
      render json: ["You can't edit a project you didn't create"]
    else
      if @project.update(project_params)
        render 'api/projects/show'
      else
        render json: @project.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :cover_img)
  end

end
