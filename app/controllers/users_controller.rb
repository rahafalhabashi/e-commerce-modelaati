class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def userOrder
    # debugger
    p = Product.find_by(id: params[:id])
    cp = current_user.cart.products << p
    render json: current_user.cart.products
  end

  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: { error: user.errors.messages }, status: 422
    end
  end

  def update
    user = User.find(params[:id])
    if user.update!(user_params)
      render json: user
    else
      render json: { error: user.errors.messages }, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    if user.destroy
      head :no_content
    else
      render json: { error: "User not found" }, status: 422
    end
  end

  private

  def user_params
    params.permit(:name, :email, :birthday, :password, :username)
  end

  def order_params
    params.permit(:checked_out, :user_id)
  end
end
