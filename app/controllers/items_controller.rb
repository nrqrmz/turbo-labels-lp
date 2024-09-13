class ItemsController < ApplicationController
  def add_consumer
    @item = Item.find(params[:id])
    @item.consumers << current_user.id
    @item.save

    redirect_to root_path
  end

  def remove_consumer
    @item = Item.find(params[:id])
    @item.consumers = []
    @item.save

    redirect_to root_path
  end
end
