// Action：JavaScriptのオブジェクトのこと

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

// 下記のように短くできる
export const decrement = () => ({
  type: DECREMENT
})
