import React, { Component } from "react";
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

// actions/index.jsで定義したものをimportする
import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

// mapStateToProps：Storeが持つ状態stateをどのようにpropsに混ぜ込むかを決める
const mapStateToProps = state => ({ events: state.events })

// mapDispatchToProps：Reducerにアクションを通知する関数dispatchを
// どのようにpropsに混ぜ込むかを決める
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
