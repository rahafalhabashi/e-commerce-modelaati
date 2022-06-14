class CartsController < ApplicationController
  def index
    carts = Cart.all
    render json: carts
  end

  def show
    # cart = Cart.find_by(params[:id])
    # if cart
    #   render json: cart
    # else
    #   render json: { error: "Not found" }, status: :no_content
    # end
    order = Order.find_by(checked_out: false)
    if order
      # c = Cart.find_by(params[:order_id])
      render order.products 
    else
      render "Cart is empty."
    end
  end
end
