class Api::ProjectsController < ApplicationController

# make ajax include project and instructions
  def create

    # params[:instructions]["0"][:media]
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    # transcation make sure project and instruction save, if any fail, rollback.
    # if it fails keep them on the page with a rendered error
    i = 0
    if params[:instructions]
      @instructions = [];
      while params[:instructions]["#{i}"]
        step_title = params[:instructions]["#{i}"][:step_title]
        step_detail = params[:instructions]["#{i}"][:step_detail]
        media = params[:instructions]["#{i}"][:media]
        instruction = Instruction.new(step_title: step_title, step_detail: step_detail, media: media)
        @instructions.push(instruction)
        i += 1
      end
    end
    debugger
    Project.transaction do
      if @project.save
        @instructions.each do |instruction|
          instruction.project_id = @project.id
          instruction.save
        end
      end
    end
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
    params.require(:project).permit(:title, :description, :cover_img, instructions: [])
  end
  # def instruction_params
  #   params.permit(:media, :step_title, :step_detail)
  # end

end
