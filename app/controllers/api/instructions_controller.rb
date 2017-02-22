class Api::InstructionsController < ApplicationController
  def create
    debugger
    @instruction = Instruction.new(instruction_params)
    debugger
    if @instruction.save
      render '/show'
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end

  def index
    @instructions = Instruction.all
  end

  def update
    @instruction = Instruction.find(params[:id])
    debugger
    # if @instruction.user_id != current_user.id
    #   render json: ["You can't edit a instruction you didn't create"]
    # else
      if @instruction.update(instruction_params)
        debugger
        render 'api/projects/show'
      else
        render json: @instruction.errors.full_messages, status: 422
      end
    # end
  end

  def destroy
    # @instruction = Instruction.find(params[:id])
    # @instruction.destroy
    # render :show
  end

  private
  def instruction_params
    params.require(:instruction).permit(:step_title, :step_detail, :media, :project_id)
  end

end
