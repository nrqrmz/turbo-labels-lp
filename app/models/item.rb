class Item < ApplicationRecord
  belongs_to :bill

  after_update_commit :broadcast_item

  def broadcast_item
    broadcast_update_to "item_#{id}",
                        partial: 'items/item',
                        locals: { item: self }
  end
end
