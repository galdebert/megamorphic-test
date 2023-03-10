import { Box } from './Box'

//--------------------------------------------------------------------------------------------------
type A3 = { a: number }
function newA3(): A3 {
  return {
    a: 0,
  }
}

//--------------------------------------------------------------------------------------------------
type B3 = { b1: number; b2: number }
function newB3(): B3 {
  return {
    b1: 0,
    b2: 0,
  }
}

//--------------------------------------------------------------------------------------------------
type C3 = { c1: number; c2: number; c3: number }
function newC3(): C3 {
  return {
    c1: 0,
    c2: 0,
    c3: 0,
  }
}

//--------------------------------------------------------------------------------------------------
type D3 = { d1: number; d2: number; d3: number; d4: number }
function newD3(): D3 {
  return {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
  }
}

//--------------------------------------------------------------------------------------------------
type E3 = { e1: number; e2: number; e3: number; e4: number; e5: number }
function newE3(): E3 {
  return {
    e1: 0,
    e2: 0,
    e3: 0,
    e4: 0,
    e5: 0,
  }
}

type AnyObj3 = A3 | B3 | C3 | D3 | E3

//--------------------------------------------------------------------------------------------------
export class Soa {
  objs: AnyObj3[] = []
  boxes: number[] = []

  constructor(N: number, classCount: number) {
    const objs: AnyObj3[] = []

    let k = 0
    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j) {
        let obj: AnyObj3
        switch (k % classCount) {
          case 0: obj = newA3(); break
          case 1: obj = newB3(); break
          case 2: obj = newC3(); break
          case 3: obj = newD3(); break
          case 4: obj = newE3(); break
          default: throw new Error()
        } // prettier-ignore

        k++
        objs.push(obj)
        this.boxes.push(i, j, i + 1, j + 1)
      }
    }

    this.objs = objs
  }

  computeBigBox(): Box {
    const { objs, boxes } = this
    const box = Box.new()
    const len = objs.length
    for (let i = 0; i < len; ++i) {
      Box.expandByBoxBuf(box, boxes, i * 4)
    }
    return box
  }
}
