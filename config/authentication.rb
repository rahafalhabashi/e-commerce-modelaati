require 'stripe'


Stripe.api_key = 'sk_test_51LA0u0KbdjY7fQwQnb9aTxwAsIJwSJMTMGKFMO2bh8CTrCuptivI5i7r6akPsiI4j3B1Udp2uo1c3WrqRBYoFwsh00Mc1hy9dO'

p Stripe::Customer.list 