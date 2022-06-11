class Order < ApplicationRecord
  belongs_to :user
  has_one :cart
  has_many :products, through: :cart
end
