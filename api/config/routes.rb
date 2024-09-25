Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' } do
    namespace :v1 do
      resources :patterns, only: %i[create index update destroy]
    end
  end
end
