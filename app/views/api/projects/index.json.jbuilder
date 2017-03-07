@projects.each do |project|
  json.set! project.id do

    json.extract! project, :id, :title, :publish
    json.owner project.user.username
    json.cover_img asset_path(project.cover_img.url)
  end
end
