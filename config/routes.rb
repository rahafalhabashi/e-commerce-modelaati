Rails.application.routes.draw do
  resources :users
  resources :products, only: [:index, :show]
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :carts, only: [:index, :show]

  # delete :logout, to: "sessions#logout"
  # get :loggedIn, to: "sessions#loggedIn"

  # login/out and auth
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "users#show"
  get "/users", to: "users#index"
  post "/signup", to: "users#create"

  post "/potato", to: "sessions#cat"
  post "/cartorder", to: "users#openOrder"
  get "/cart", to: "orders#show"

  # Products
  # get "/products", to: "products#index"

end
