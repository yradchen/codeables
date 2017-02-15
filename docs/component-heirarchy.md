## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
  - Home
  - ProjectIndexContainer

**ProjectsIndexContainer**
  - ProjectsIndex
    + ProjectsIndexItem

**HeaderContainer**
  - UserInfo

**ProjectDetailContainer**
  - ProjectDetail
  - CommentIndexContainer
    + CommentIndex
      - ComentIndexItem

**ProjectsFormContainer**
  - ProjectsForm

**SearchBar**

**Footer**


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home"    | "HomeContainer"     |
| "/home/projects/:projectsId" | "ProjectsDetailContainer" |
| "/home/projects/:projectsId/edit" | "ProjectsFormContainer" |
| "/new-project" | "ProjectsFormContainer" |
