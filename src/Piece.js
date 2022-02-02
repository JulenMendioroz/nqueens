export default class Piece {
  constructor(type){
    this.type = type
    this.element = this.setElement()
  }

  setElement = () => {
    const element = document.createElement('div')
    element.classList.add('piece', this.type)
    return element
  }
}