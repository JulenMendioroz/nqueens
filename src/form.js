import NQueensProblem from './NQueensProblem.js'
import Board from './Board.js'

export const form = document.querySelector('#form')

export const eventHandler = event => {
  event.preventDefault()

  const size = parseInt(event.target[0].value)
  const conf = new NQueensProblem(size).solve()
  const board = new Board('#board', conf)
  
  board.init()
  board.render()
}