json.extract! @project, :title, :description, :id
json.cover_img asset_path(@project.cover_img.url)
json.owner @project.user.username

json.instructions do
  json.array! @project.instructions do |instruction|
    json.extract! instruction, :id, :step_title, :step_detail, :project_id

    json.media asset_path(instruction.media.url)
  end
end
