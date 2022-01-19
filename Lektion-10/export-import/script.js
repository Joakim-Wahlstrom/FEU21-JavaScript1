import UserService from './UserService.js'
import User from './User.js'
import { hej } from './Functions.js'

UserService.signIn('joakim@mail.com', 'BytMig123')

const user1 = new User('Joakim', 'Wahlström')

console.log(user1);

hej()