class Product < ApplicationRecord
    belongs_to :order, optional: true
    # belongs_to :user, through: :order
end
