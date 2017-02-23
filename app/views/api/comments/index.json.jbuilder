@comments.each do |comment|

  json.set! comment.id do
    json.extract! comment, :id, :body, :user_id, :project_id
  end
end
