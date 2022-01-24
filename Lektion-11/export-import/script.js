// import User from './models/User.js'
import UserService from './services/UserService.js'
import { validate as va } from './functions/Functions.js'

// const user = new User('Joakim', 'Wahlström', 'joakim@mail.com', 'BytMig123')

const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  email: 'joakim@mail.com',
  password: 'BytMig123'
}

if(va(user)){
  UserService.signUp(user)
}

UserService.signIn('joakim@mail.com', 'bytMig123')