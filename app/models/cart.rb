class Cart < ApplicationRecord
  # belongs_to :user
  belongs_to :order
  has_one :user, through: :order
  has_many :cart_products
  has_many :products, through: :cart_products
end
