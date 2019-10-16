import secret from 'secret.js'
const vars = {
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  email: {
    sender: {
      auth: {
        pass: "",
        user: ""
      },
      service: "gmail"
    },
    receiver: {
      address: "",
      name: ""
    }
  },
  stripe: {
    sk: '',
    pk: ''
  }
}

export default { ...vars, ...secret }
