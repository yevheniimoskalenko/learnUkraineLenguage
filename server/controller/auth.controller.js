const firebase = require('firebase')
require('firebase/auth')
module.exports = async (req, res) => {
  const { email, password } = req.body
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    return res.json({
      status: 'success',
      message: 'Greate you sign up!'
    })
  } catch (e) {
    return res.json({
      status: 'error',
      message: 'user is busy'
    })
  }
}
