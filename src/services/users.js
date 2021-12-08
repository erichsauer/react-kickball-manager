import client from './client'

export function getUser() {
  return client.auth.session()
}

export async function signUpUser(email, password) {
  return client.auth.signUp({ email, password })
}

export async function signInUser(email, password) {
  return client.auth.signIn({ email, password })
}

export async function signOutUser() {
  return client.auth.signOut()
}
