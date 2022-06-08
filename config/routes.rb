Rails.application.routes.draw do
  resources :users
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]

  delete :logout, to: "sessions#logout"
  get :loggedIn, to: "sessions#loggedIn"

  post "/login", to: "sessions#create"
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
end
