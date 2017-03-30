class Api::ProjectsController < ApplicationController

# make ajax include project and instructions
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

    @project = Project.includes(:instructions, :comments, :medium).find(params[:id])
    
  end

  def index
    if params[:project]
      if project_params[:user_id]
        @projects = Project.find_by_user_id(project_params[:user_id])
      else
        @projects = Project.find_by_title(project_params[:title])
      end
    else
      @projects = Project.find_by_published
    end
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
    # id = params[:id].to+i
    @project = Project.find(params[:id])
    @project.destroy
    render 'api/projects/show'
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :cover_img, :publish, :user_id, instructions: [])
  end

end
