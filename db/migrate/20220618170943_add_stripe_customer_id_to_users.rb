class AddStripeCustomerIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :stripe_user_id, :integer
  end
end
