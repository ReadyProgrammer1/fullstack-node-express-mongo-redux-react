import api from '../'

export function getUserEntries() {
  return api('get', 'user-entries')
}

export function createUserEntry(values) {
  const { no, type, name, email } = values
  return api('post', 'user-entries', { no, type, name, email })
}

export function getUserEntry(id) {
  return api('get', `user-entries/${id}`)
}

export function updateUserEntry(id, values) {
  const { no, type, name, email } = values
  return api('put', `user-entries/${id}`, { no, type, name, email })
}

export function deleteUserEntry(id) {
  return api('delete', `user-entries/${id}`)
}
