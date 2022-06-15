class OrdersController < ApplicationController
  def index
    orders = Order.all
    render json: orders
  end

  # def
    

  def show
    render json: current_user.cart.products
    
    # order = Order.find_by(id: session[:user_id], checked_out: false)
    # if order
    #   render json: order.products
    # else
    #   o = Order.create(checked_out: false, user_id: session[:user_id])
    #   Cart.create(params[order_id: o.id])
    #   render json: o 
    # else
    #   render json: { error: "No cart associated." }, status: :unauthorized
    # end
  end


  def cart_prods
    if (order[checked_out: false])
      order = Order.find(params[checked_out: false])
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
