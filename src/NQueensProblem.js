import {range} from './utils.js'

export default class NQueensProblem {
  constructor(n){
    this.n      = n
    this.queens = this.setQueens()
  }

  setQueens(){
    const queens = new Map()
    for (const row of range(0, this.n)){
      queens.set(row, null)
    }
    return queens
  }

  get solution(){
    const solution = new Map()
    this.queens.forEach((val, key) => 
      solution.set(String.fromCharCode(97 + key) + `${this.n - val}`, 'black-queen')
    )
    return solution
  }

  isSafePosition(row, col){
    for (const [r, c] of this.queens){      
      if (c === null) continue
      if (row === r)           return false
      if (col === c)           return false
      if (row - col === r - c) return false
      if (row + col === r + c) return false
    }

    return true
  }

  canPutQueenInRow(row){
    if (row === this.n) return true

    for (const col of range(0, this.n)){
      if (!this.isSafePosition(row, col)) continue
      
      this.queens.set(row, col)
    
      if (this.canPutQueenInRow(row + 1)) return true

      this.queens.set(row, null)
    }

    return false
  }

  solve(){
    return this.canPutQueenInRow(0) ? this.solution : false
  }
}