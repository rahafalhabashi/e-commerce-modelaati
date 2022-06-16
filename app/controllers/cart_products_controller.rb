class CartProductsController < ApplicationController
    def index
        render json: CartProducts.all
    end
end
