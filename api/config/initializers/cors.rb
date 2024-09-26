module StitchIt
  class Application < Rails::Application
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins do |source|
          # Allow localhost:3000 in development
          if Rails.env.development?
            'localhost:3000'
          # Allow production domain in production
          elsif Rails.env.production?
            'stitch-it.app'
          else
            source
          end
        end
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
  end
end
