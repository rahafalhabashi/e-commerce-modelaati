class ChangeBirthdayTypeToString < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :birthday, :date
  end
end
