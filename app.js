var CONTACT_TEMPLATE = {
  name: "",
  email: "",
  description: "",
  errors: null
}

var state = {}

function setState(changes) {
  Object.assign(state, changes)
  ReactDOM.render(
    React.createElement(FormView, Object.assign({}, state, {
      onNewContactChange: updateNewContact,
      onNewContactSubmit: submitNewContact,
    })),
    document.getElementById('react-app')
  )
}

setState({
  contacts: [{
    key: 1,
    name: "Marvin Martian",
    email: "mmart@acme.com",
    description: "Martian Tech"
  }, {
    key: 2,
    name: "Buggs Bunny",
    email: "bb@looney.com",
    description: "Rabbit Tech"
  }, ],
  newContact: Object.assign({}, CONTACT_TEMPLATE),
});

function updateNewContact(contact) {
  setState({
    newContact: contact
  });
}

function submitNewContact() {
  var contact = Object.assign({}, state.newContact, {
    key: state.contacts.length + 1,
    errors: {}
  });

  if (!contact.name) {
    contact.errors.name = ["Please enter your new contact's name"]
  }
  if (!/.+@.+\..+/.test(contact.email)) {
    contact.errors.email = ["Please enter your new contact's email"]
  }
  setState(
    Object.keys(contact.errors).length === 0 ? {
      newContact: Object.assign({}, CONTACT_TEMPLATE),
      contacts: state.contacts.slice(0).concat(contact),
    } : {
      newContact: contact
    }
  )
}
