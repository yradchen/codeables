export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: `api/session`,
    data: { user }
  });
};

export const signup = (user) => {
  return $.ajax({
  method: 'POST',
  url: `api/users`,
  data: { user }
  });
};

export const logout = () => {
  return $.ajax({
  method: 'DELETE',
  url: `api/session/`
  });
};

//
// api_user POST   /api/user(.:format)    api/users#create {:format=>:json}
// api_session GET    /api/session(.:format) api/sessions#show {:format=>:json}
//          DELETE /api/session(.:format) api/sessions#destroy {:format=>:json}
//          POST   /api/session(.:format) api/sessions#create {:format=>:json}
