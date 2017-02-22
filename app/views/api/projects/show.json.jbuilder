json.extract! @project, :title, :description, :cover_img, :id

json.instructions do
  json.array! @project.instructions do |instruction|
    json.extract! instruction, :id, :step_title, :step_detail, :media, :project_id
    json.media asset_path(instruction.media.url)
  end
end
