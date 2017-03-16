
# Codeables

[Codeables Live][codeables]

[codeables]: http://www.codeables.ltd

Codeables is a full-stack web application inspired by Instructables. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Login/Signup
![errors]
These pages display a multitude of errors to provide the user with a smooth experience that lets the user know exactly what is expected, if anything went wrong, and how to remedy the situation. These errors include, missing inputs, requirements for passwords, and notifications that a username or password have already been taken.

On the backend, as soon as a user is logged in they are redirected to the homepage where they can now see individual projects as well as create their or projects. Additionally, they are able to view projects they have created but not yet published. A component check as well as an on enter hook is in place to ensure that a logged in user doesn't return to either the login or signup pages.

## Creating projects
![editoverview]
When a user starts creating a project a modal becomes visible that asks the user for a title. Once a title is entered a request is made to the server to post the data. At this point the user is taken to a main edit page where they can add instructions and can edit their projects cover image, title, or description. Once a user is finished they hit toggle the published state of their project which makes it visible to other users.

On the backend, the projects table has images, attached via paperclip, a title, description, and a boolean titled publish. Projects are required to have a cover image and a title whereas instructions only require a title. Component checks are in place to see whether an instruction has images or a description and the styling is updated accordingly. When entering the main edit page an API call is made to the server to request the project. Active Records '.includes' method is used to prefetch data on instructions and limit database queries. This also allows for easy implementation of a preview button where the user can see what their project is before it is published. When creating an instruction a default title is created that is displayed as Step X, where X is the amount of instructions plus one.

## Individual Project View Page

A separate component and container is provided for the project view page. An on enter hook, that redirects users that aren't logged in to the login page, is also in place. If the project is currently the users project an edit button become visible which takes the user to the main edit project page.


On the backend, the container maps the current user to props as well the current project, it's instructions and comments. Upon entering an API fetch request, with Active Records 'includes' method, is made to the server to receive the project, instructions, as well as comments. A check is made see if the current user is the owner of the project, which allows for an edit button. Additionally, the css styling ensures that certain borders and image containers aren't displayed if images aren't provided.


Upon logging in the user is returned to the index page where they can now view individual projects as well as create their own projects or see the projects they have created but not published. When creating a project, projects are set to an unpublished state in which they are not yet visible or searchable until the user is ready. Once the user feels the project is presentable they toggle the publish button, which adds the project to the index.


## Search

The search currently looks for projects by titles that include the searched keyword. The search query is setup to be case insensitive. However, for future large scale implementation the user will be required to enter keywords for their projects and will be required to submit their search request, rather than having instant feedback. This will reduce database queries as well as allow project creators to specify when they want their project to show up. For example, if they having a project titled looping, they may want the keyword iteration to also make sure their project shows up.


## Future

While I will continue to work on Codeables in the future and there are many features I would like to implement, the ones I find most valubale to implement next are listed below.

### Code Snippets
While instructables only allows images to be inserted, Codeables is designed to allow users to show others how to make coding projects. Thus, a future implementation will allows users to insert code snippets.

### Comment sorting and likes

Since codeables relies on building projects using code, there is also room for error. It would be helpful to users to be able to upvote comments that help them and thus also create comments that solve the most common issues.

### Categories

Since there are so many different coding languages, codeables will have categories to allow users to sort by these various categories.

[errors]: https://s3.amazonaws.com/codeables-DEV/sample_errors.png
[editoverview]: https://s3.amazonaws.com/codeables-DEV/seeds/edit_overview.png
