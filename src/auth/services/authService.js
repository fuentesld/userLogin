
export const loginUser = (userLogin) => {
  const {username, password} = userLogin
  return (username === 'admin' && password === '12345')
}
