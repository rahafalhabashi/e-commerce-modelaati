class CartsController < ApplicationController
  def index
    carts = Cart.all
    render json: carts
  end

  def show
    cart = Cart.find_by(params[:id])
    if cart
      render json: cart
    else
      render json: { error: "Not found" }, status: :no_content
    end

    def cartprods 
      
    end
  end
end
