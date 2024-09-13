import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { currentUserId: String }

  connect() {
  }

  itemTag(event) {
    const info = this.getVariables(event)
    const addConsumerUrl = `/items/${info.itemId}/add_consumer`
    const removeConsumerUrl = `/items/${info.itemId}/remove_consumer`

    if (this.notSelectYet(info.consumersQuantity)) {
      this.fetchUrlTo(addConsumerUrl)
    } else {
      this.fetchUrlTo(removeConsumerUrl)
    }
  }

  // este metodo obtiene las variables que necesitamos obtener para poder llamar los demas metodos
  getVariables(event) {
    return {
      itemId: event.target.value,
      userId: this.currentUserIdValue,
      consumersQuantity: event.target.dataset.quantity
    }
  }

  // este metodo evalua ningun consumer haya seleccionado este item, contanto los consumers dentro del item, devuelve true si no ha sido seleccionado todavia y false si ya fue seleccionado
  notSelectYet(quantity) {
    return quantity < 1
  }

  // este metodo hace un fetch a la accion correspondiente del controlador la cual se encargara de agregar o remover el consumer basandose en la url que se le proporciona
  fetchUrlTo(url) {
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
}
