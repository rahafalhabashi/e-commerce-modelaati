class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
  include ActionController::Cookies
  # before_action :carts
  # include ActionController::Serialization

  #   runs before every function unless skipped (when logging in and signing up)
  before_action :authorized
  include ActionController::Cookies
  # gives access to use cookies to all our controlers
  def authorized
    return render json: { error: "Not Authorized" }, status: :unauthorized unless logged_in?
  end

  #Shows current user (user logged in)
  def current_user
    User.find_by(id: session[:user_id])
  end


  private

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { errors: invalid }, status: :not_found
  end

end
