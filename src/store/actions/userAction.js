const userLogin = (status, user) => {
  return {
    type: 'USER_LOGIN',
    status: status,
    user: user
  }
}

export {
  userLogin
}