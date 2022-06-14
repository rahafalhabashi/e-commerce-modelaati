class User < ApplicationRecord
  has_secure_password

  has_many :orders

  def order
    self.orders.find_by(checked_out: false)
  end

  def cart 
    ord = self.order
    if ord 
      return ord.cart 
    else 
      o = Order.new
      o.checked_out = false
      c = Cart.new
      o.cart = c
      self.orders << o 
      return c 
    end

  end

# def cart
#   open_order = Order.find_by!(checked_out: false)
#   if(open_order == nil) {
#     Cart.create
#   }
# end

  # belongs_to :cart, through: :orders
  # has_many :products, through: :cart
  # has_one :cart 

  # validates_presence_of :email
  # validates_uniqueness_of :email
  # validates :name, presence: true, length: { maximum: 50 }
  # validates :password_digest, presence: true
  # validates :birthday, presence: true

  # private

  # def validate_age
  #   if dob.present? && dob > 18.years.ago.to_i
  #     errors.add(:dob, "You should be over 18 years old.")
  #   end
  # end
end
