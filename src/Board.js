import Square from './Square.js'
import { range } from './utils.js'

export default class Board {
  constructor(selector, conf){
    this.element = document.querySelector(selector)
    this.squares = new Map()
    this.size = Math.max(0, Math.floor(conf.size))
    this.conf = conf ? conf : new Map()
  }

  init = () => {
    while (this.element.firstChild){
      this.element.removeChild(this.element.firstChild)
    }

    for (const i of range(0, this.size ** 2)){
      const rank = this.size - Math.floor(i / this.size)
      const file = i % this.size
      const isBlack = rank % 2 !== file % 2
      const fileName = String.fromCharCode(97 + file)      
      const square = new Square({rank, file: fileName, isBlack})
      this.squares.set(`${fileName}${rank}`, square)
    }

    this.conf.forEach((pieceType, rankFile) => this.squares.get(rankFile).putPiece(pieceType))
  }

  styleElement = () => {
    this.element.classList.add('board')
    this.element.style.setProperty('--board-dim', this.size)
  }

  render = () => {
    this.styleElement()
    const boardFragment = new DocumentFragment()
    this.squares.forEach(square => boardFragment.appendChild(square.element))
    this.element.appendChild(boardFragment)
  }
}