class OrdersController < ApplicationController
  def index
    orders = Order.all
    render json: orders
  end

  def show
    # debugger
    render json: current_user.cart.products
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

  def checkout
    co = current_user.order
    co_order = co.update!(:checked_out => true)
    render json: co_order
  end

  #Stripe Controller Methods:
  
  # Token is created using Stripe Checkout or Elements!
  # Get the payment token ID submitted by the form:
  
  def charge
    Stripe.api_key = "sk_test_51LA0u0KbdjY7fQwQnb9aTxwAsIJwSJMTMGKFMO2bh8CTrCuptivI5i7r6akPsiI4j3B1Udp2uo1c3WrqRBYoFwsh00Mc1hy9dO"
    token = params[:stripeToken]
    charge = Stripe::Charge.create({
      amount: 999,
      currency: "usd",
      description: "Example charge",
      source: token,
    })
  end

  private

  def order_params
    params.permit(:checked_out, :user_id)
  end
end
