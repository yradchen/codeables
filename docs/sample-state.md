```js

{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },

  projects: {
    1: {
      title: "First Project",
      description: "This project shows you how to make a project"
      owner: 1,
      cover_image_url: "https://avatars1.githubusercontent.com/u/15313592?v=3&s=460",
      instructions: [
        { url: "www.randomvideoorimage", step_title: 'Step 1', step_detail: 'First you type a description' },
        { url: www.anotherimage.com, step_title: 'Step 2', step_detail: 'Upload a picture!' }
        ],
      comments:
        [
          { username: 'Oscar', content: 'I like it.' },
          { username: 'Jeff', content: 'Me too!' }
        ]
    }
  },
}
