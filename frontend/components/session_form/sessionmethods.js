const signInGuest = (e) => {
  let guest = { username: "Guest", password: "wizardhat1"};
  e.preventDefault();
  this.props.login(guest);
  this.redirectIfLoggedIn();
};

export default signInGuest;
