class RegistrationsController < ApplicationController
  def create
    user = User.create!(user_params)
    if user
      session[:user_id] = user.id 
        render json: {
            status: :created,
            user: user
        }
    else
      render json: { error: user.errors.messages }, status: 422
    end
  end

  private

  def user_params
    params.permit(:name, :email, :birthday, :password, :username)
  end
end
