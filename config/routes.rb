Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :destroy, :index, :show, :update]
    resources :instructions, only: [:create, :update, :show, :destroy]
    resources :comments, only: [:create, :update, :index, :destroy]
    resources :media, only: [:create, :index, :show, :update]
  end
  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
