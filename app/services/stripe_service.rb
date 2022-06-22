require "stripe"
require "dotenv"

class StripeService
    Stripe.api_key = ENV["STRIPE_SECRET_KEY"]

  # Token is created using Stripe Checkout or Elements!
  # Get the payment token ID submitted by the form:
  token = params[:stripeToken]

  def charge 
  charge = Stripe::Charge.create({
    amount: 999,
    currency: "usd",
    description: "Example charge",
    source: token,
  })
  end

  def find_or_create_customer(customer)
    if customer.stripe_customer_id.present?
      stripe_customer = Stripe::Customer.retrieve(customer.stripe_customer_id)
    else
      stripe_customer = Stripe::Customer.create({
        name: customer.full_name,
        email: customer.email,
        phone: customer.contact_number,
      })
      customer.update(stripe_customer_id: stripe_customer.id)
    end
    stripe_customer
  end

  def create_card_token(params)
    Stripe::Token.create({
      card: {
        number: params[:card_number].to_s,
        exp_month: params[:exp_month],
        exp_year: params[:exp_year],
        cvc: params[:cvc], #used [:cvv] in tutorial bc thats what he referred to it as in his form
      },
    })
  end

  def create_stripe_cutromer_card(params, stripe_customer)
    token = create_stripe_cutromer_card
    Stripe::Customer.create_source(
      stripe_customer.id,
      { source: token.id }
    )
  end

  def create_stripe_charge(amount_to_be_paid, stripe_customer_id, card_id)
    Stripe::Charge.create({
      amount: amount_to_be_paid * 100,
      currency: "usd",
      source: card_id,
      customer: stripe_customer_id,
      description: "Amount $#{amount_to_be_paid} charged for your order.",

    })
  end
end

#in console: instantiate stripe service object => stripe_service = StripeService.new
# kill rails console: 1. lsof -wni tcp:3000 --2. kill -9 PID
