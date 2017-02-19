# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Project.delete_all
Instruction.delete_all
guest = User.create!(username: 'Guest', password: 'wizardhat1', email: 'guest@guestlogin.fake')

guest2 = User.create!(username: 'Guest2', password: 'wizardhat1', email: 'guest@guestlogin.fake2')

project1 = Project.create!(title: "first project", description: "this is the first one I made", user_id: guest.id)
project2 = Project.create!(title: "second project", description: "this is the second one I made", user_id: guest.id)

project3 = Project.create!(title: "third project", description: "this is the second one I made", user_id: guest2.id)

Instruction.create(step_title: "Step one:", step_detail: "write a detail", project_id: project1.id)
Instruction.create(step_title: "Step two:", step_detail: "hit create", project_id: project1.id)

Instruction.create(step_title: "Step one: user 2", step_detail: "user 2 detail", project_id: project2.id)
