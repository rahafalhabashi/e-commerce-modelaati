require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ECommerceModelaati
  class Application < Rails::Application
    config.load_defaults 7.0
    config.api_only = true
    config.middleware.use ActionDispatch::Cookies 
    config.middleware.use ActionDispatch::Session::CookieStore 
    #stores everything on the client

    config.action_dispatch.cookies_same_site_protection = :strict
    config.eager_load_paths << Rails.root.join("app/services")
    
    autoloaders.main.ignore(Rails.root.join('app/node_modules'))
  end
end
