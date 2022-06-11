class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products
    end

    def show 
        product = Product.find(params[:id])
        render json: product
    end

    # def create
    #     product = Product.create!(product_params)
    #     render json: product, status: :created 
    # end

    def addPrToCr
        # newCI = Product.show
        # Cart.self.products << newCI
    end

    private 
    def product_params 
        params.permit(:name, :description, :price, :img_url)
    end
end
