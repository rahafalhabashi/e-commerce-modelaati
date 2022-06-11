class SessionsController < ApplicationController
  # include CurrentUserConcern
  def create
    user = User.find_by(username: params[:username])
    if user
      session[:user_id] = user.id
      render json: user, loggedIn: true, status: :created
    else
      render json: { error: "Login Failed" }, status: 401
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  # def loggedIn
  #   if current_user
  #     render json: {
  #       loggedIn: true,
  #       user: current_user
  #     }
  #   else
  #     render json: {
  #       loggedIn: false
  #     }
  #   end
  # end

  # def logout
  #   reset_session
  #   render json: { status: 200, logged_out: true}
  # end
end
