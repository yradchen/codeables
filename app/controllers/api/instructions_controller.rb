class Api::InstructionsController < ApplicationController
  def create

    @instruction = Instruction.new(instruction_params)
    if @instruction.save
      render 'api/instructions/show'
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end

  def index
    @instructions = Instruction.all
  end

  def update
    @instruction = Instruction.find(params[:id])
      if @instruction.update(instruction_params)
        render 'api/instructions/show'
      else
        render json: @instruction.errors.full_messages, status: 422
      end
  end

  def destroy
    @instruction = Instruction.find(params[:id])
    @instruction.destroy
    render 'api/instructions/show'
  end

  private
  def instruction_params
    params.require(:instruction).permit(:step_title, :step_detail, :media, :project_id)
  end

end
