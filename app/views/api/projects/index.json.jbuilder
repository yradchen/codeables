@projects.each do |project|
  json.set! project.id do

    json.extract! project, :id, :title, :cover_img
    json.owner project.user.username
  end
end
