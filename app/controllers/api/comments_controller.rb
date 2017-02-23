class Api::CommentsController < ApplicationController

  # resources :comments, only: [:create, :update, :index, :destroy]
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render 'api/comments/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    # logic find instructions with project id
    if params[:comment]
      @comments = Comment.where("project_id = '#{comment_params[:project_id]}'")
      render 'api/comments/index'
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'api/comments/show'
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :project_id)
  end

end
