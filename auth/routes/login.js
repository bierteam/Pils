const express = require('express')
const User = require('../models/user')
const otp = require('../methods/otp')
const router = express.Router()

router.post('/', async (req, res) => {
  // Login a registered user
  try {
    const { username, password, token } = req.body
    const user = await User.findByCredentials(username, password)
    if (!user) {
      // TODO log the failed attempt here
      return res.status(401).send({ error: 'Login failed! Check credentials' })
    } else if (user.otp && user.otp.status && !token) {
      // TODO log here that 2fa is required
      return res.json({ otp: true })
    } else if (user.otp && user.otp.status && !otp.check(token, user.otp.secret)) {
      return res.status(401).send('The 2FA code is only valid for 30 seconds, try again.')
    }
    // TODO log here that the user succeeded
    const jwt = await user.generateAuthToken()
    res.send({ user, jwt })
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router