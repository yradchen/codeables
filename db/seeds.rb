# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'Guest', password: 'wizardhat1', email: 'guest@guestlogin.fake')

Project.create!(title: "first project", description: "this is the first one I made", cover_img: "test.com", user_id: 1)

instruction = Instruction.create(step_title: "Step one:", step_detail: "hit create", project_id: 1)
