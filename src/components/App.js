import React, { Component } from "react";
import { connect } from 'react-redux'

// actions/index.jsで定義したものをimportする
import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// mapStateToProps：Storeが持つ状態stateをどのようにpropsに混ぜ込むかを決める
const mapStateToProps = state => ({
  value: state.count.value
})

// mapDispatchToProps：Reducerにアクションを通知する関数dispatchを
// どのようにpropsに混ぜ込むかを決める
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
