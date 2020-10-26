const jsonwebtoken = require('jsonwebtoken')
const Person = require('../models/user.model')
require('dotenv')
module.exports = async (req, res) => {
  const { email, pass, name } = req.body
  const candidate = await Person.findOne({ email })
  if (candidate == null) {
    const user = new Person({
      email,
      name,
      password: pass
    })
    await user.save()
    const token = jsonwebtoken.sign(
      {
        email,
        name
      },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 1000 }
    )
    return res.json({ token })
  }
}
