json.extract! @project, :title, :description, :id, :publish
json.cover_img asset_path(@project.cover_img.url)
json.owner @project.user.username


json.instructions do
  @project.instructions.each do |instruction|
    json.set! instruction.id do
      json.extract! instruction, :id, :step_title, :step_detail, :project_id
      json.media asset_path(instruction.media.url)
    end
  end
end

if @project.instructions.length == 0
  # json.instructions do
  json.instructions({})
end

json.comments do
  @project.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :body, :project_id, :id
      json.author comment.user.username
    end
  end
end
