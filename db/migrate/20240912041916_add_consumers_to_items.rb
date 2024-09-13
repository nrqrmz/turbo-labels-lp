class AddConsumersToItems < ActiveRecord::Migration[7.1]
  def change
    add_column :items, :consumers, :integer, array: true, default: []
  end
end
