@projects.each do |project|
  json.set! project.id do

    json.extract! project, :id, :title, :publish
    json.owner project.user.username
    json.cover_img project.cover_img.url(:thumb)

  end
end
