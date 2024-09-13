class ItemsController < ApplicationController
  def add_consumer
    @item = Item.find(params[:id])
    @item.consumers << current_user.id
    @item.save

    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace(
          "item_#{@item.id}",
          partial: 'items/item',
          locals: { item: @item }
        )
      end
      format.html { redirect_to root_path }
    end
  end

  def remove_consumer
    @item = Item.find(params[:id])
    @item.consumers = []
    @item.save

    redirect_to root_path
  end
end
