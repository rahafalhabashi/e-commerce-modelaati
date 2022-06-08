class ApplicationController < ActionController::API
    include ActionController::Cookies

    # uses CSRF token to checks if user checking form is actual user, not someone hijacking system
#    generated through the system (not allowing me to create new users when added)
    skip_before_action :verify_authenticity_token 
end
