class CreateCartProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_products do |t|
      t.integer :cart_id
      t.integer :product_id
      t.integer :quantity

      t.timestamps
    end
  end
end
