class UserService {
  constructor(uri) {
    this.baseUri= uri
  }

  static signUp(user) {
    console.log('Registrerar användaren');
    console.log(user);
  }
  static signIn(email, password) {
    console.log(`loggar in användaren med ${email} och ${password}.`);
  }
}

// const userService = new UserService('http://localhost')

// userService.signUp({firstName: 'Joakim', lastName: 'Wahlström'})
// userService.signIn('wahlstrom@mail.com', 'BytMig123')


UserService.signUp({firstName: 'Joakim', lastName: 'Wahlström'})
UserService.signIn('wahlstrom@mail.com', 'BytMig123')