class ProductsController < ApplicationController
    # skip_before_action :index
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

    # def addPrToCr
        # newCI = Product.show
        # Cart.self.products << newCI
    # end

    # def destroy
    #     prod = Product.find(params[:id])
    #     if prod.destroy
    #       head :no_content
    #     else
    #       render json: { error: "product not found" }, status: 422
    #     end
    # end

    private 
    def product_params 
        params.permit(:name, :description, :price, :img_url)
    end
end
