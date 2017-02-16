# Codeables

[Heroku link] - not yet available-
[Trello link][trello]
[trello]: https....

## Minimum Viable Product;

Codeables is a web application inspired by Instructables and will be built using Ruby and Rails and React/Redux.
By the end of Thursday 2/23, Codeables will satisfy the following criteria with smooth, bug-free navigation,
adequate seed data and sufficient CSS styling:

- [ ] New Account creation, login, and guest/demo login
- [ ] Projects
- [ ] Commenting on projects
- [ ] Adding photos and videos to projects
- [ ] Searching projects by keyword

### The project will also have;

- [ ] A production README.
- [ ] Hosting on Heroku

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days) - W8D2-W8D3

**Objective:** Functioning rails project with front-end Authentication.

- [x] User model/migration
- [x] Back end authentication (session/password)
- [x] Static page controller
- [x] Redux cycle for front-end authentication.
- [x] User signup/sign in page
- [ ] Blank landing page
- [ ] Style sign in and sign up components

### Phase 2: Projects model, API and components (2 day) - W8D4-W8D5

**Objective:** Projects can be created read, edited, and deleted through the api.

- [ ] Project model/migration
- [ ] CRUD API for projects
- [ ] APIUtil to interact with projects
- [ ] Projects components
- [ ] Add steps/description/title to project

### Phase 3: Projects API and components (1 day) - W9D1

**Objective:** Add styling for projects index container and show page.
- [ ] Style project components
- [ ] Add videos/images to project

### Phase 4: Comment model, API and components (1 day) - W9D2-W9D3

**Objective:** Comments belonging to projects can be created, edited and destroyed via the API.
- [ ] Comment model/migration
- [ ] CRUD API for comments
- [ ] Delete of project deletes associated comments.
- [ ] Style comments

### Phase 5: Search  (1 day) W9D4

**Objective:** Add search feature
- [ ] Search recipes by title and/or description.
- [ ] Homepage ProjectsIndex container reactive to search.

### Bonus Features (TBD)
- [ ] Featured project channels
- [ ] Categories
