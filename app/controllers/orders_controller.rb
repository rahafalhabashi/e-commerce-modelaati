class OrdersController < ApplicationController
  def index
    orders = Order.all
    render json: orders
  end

  def show
    order = Order.find_by(id: session[:user_id])
    if order
      render json: order
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def cartProds
    if (order[:checked_out] == false)
      order = Order.find(params[:checked_out == false])
      render json: order.cart.products
    else
      order = Order.create(order_params)
      render json: order.cart.products
    end
  end

  private

  def order_params
    params.permit(:checked_out, :user_id)
  end
end
