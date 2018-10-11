import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUserEntry } from '../../api/user-entries'

class ShowUserEntry extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params

    id 
        ? getUserEntry(id).then(json => {
            this.props.persistUserEntry({ entry: json })
          }) 
        : alert('id undefined: ' + id)
    //getUserEntry(id).then(json => {
    //  this.props.persistUserEntry({ entry: json })
    //})
  }

  renderEntry() {
    const { userEntry: { _id, no, type, name, email} } = this.props
    return <div>
      <div><Link to={`/user-entries/${_id}/edit`}>Edit</Link></div>
      <div><strong>No.</strong> { no }</div>
      <div><strong>Type</strong> { type }</div>
      <div>
        <label>Name</label>
        <ol>
        {
          name.split("\n").map(name => <li>{ name }</li>)
        }
        </ol>
      </div>
      <div>
        <label>Email</label>
        <ol>
        {
          email.split("\n").map(step => <li>{ step }</li>)
        }
        </ol>
      </div>
    </div>
  }

  render() {
    const { userEntry } = this.props
    return <div>
      <h1>New User Entry</h1>

      { userEntry ? this.renderEntry() : 'Loading..'}
    </div>
  }
}


function mapStateToProps(state) {
  return {
    userEntry: state.userEntries.entry,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistUserEntry: (payload) => {
      dispatch({ type: "LOAD", payload})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUserEntry)