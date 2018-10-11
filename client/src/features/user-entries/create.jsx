import React from 'react'
import { connect } from 'react-redux'

import { createUserEntry } from '../../api/user-entries'
import UserEntryForm from './form'

function submitForm(values, props) {
  const { persistUserEntry } = props
  
  //createUserEntry(values).then(json => {

  //  persistUserEntry({ entry: json })
  //   if (json!==undefined) {
  //      props.history.push(`/user-entries/${json.id}`)
  //   } else {
  //       props.history.push('/')
  //   }

  //})

  createUserEntry(values)
  props.history.push('/')
}

function CreateUserEntry(props) {
  return <div>
    <h1 style={{color: '#8fcbff'}}>Create New User</h1>

    <UserEntryForm
      onSubmit={(values) => submitForm(values, props)}
      {...props.userEntry}
    />
  </div>
}

function mapStateToProps(state) {
  return {
    userEntry: state.userEntries.userEntry,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistUserEntry: (payload) => {
      dispatch({ type: "LOAD", payload})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserEntry)