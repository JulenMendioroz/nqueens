import Piece from './Piece.js'

export default class Square {
  constructor({rank, file, isBlack}){
    this.rank = rank
    this.file = file
    this.color = isBlack ? 'black' : 'white'
    this.piece = null
    this.element = this.setElement()
  }

  setElement = () => {
    const element = document.createElement('div')
    element.setAttribute('id', `${this.file}${this.rank}`)
    element.classList.add(this.color, 'square') 
    return element
  }

  putPiece = (pieceType) => {
    this.piece = new Piece(pieceType)
    this.element.appendChild(this.piece.element)
  }
}