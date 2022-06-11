class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.boolean :checked_out
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
