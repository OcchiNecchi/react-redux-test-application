import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// actions/index.jsで定義したものをimportする
import { postEvent } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
         <div>fff</div>
      </React.Fragment>
    )
  }
}

// mapStateToProps：Storeが持つ状態stateをどのようにpropsに混ぜ込むかを決める
// const mapStateToProps = state => ({ postEvent })

// mapDispatchToProps：Reducerにアクションを通知する関数dispatchを
// どのようにpropsに混ぜ込むかを決める
//const mapDispatchToProps = ({ readEvents })

export default connect(null, null)(EventsNew)
