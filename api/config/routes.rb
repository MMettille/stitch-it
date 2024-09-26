Rails.application.routes.draw do
  namespace :v1, constraints: { format: 'json' } do
    resources :patterns, only: %i[create index update destroy]
  end
end
