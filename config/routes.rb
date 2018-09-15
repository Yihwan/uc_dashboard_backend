Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :experiments, only: [:index, :show, :update]
    resources :materials, only: [:show, :update]
  end
end
