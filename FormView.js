var FormView = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
    onNewContactChange: React.PropTypes.func.isRequired,
    onNewContactSubmit: React.PropTypes.func.isRequired,
  },

  render: function() {
    var FormItemElements = this.props.contacts
      .filter(function(contact) {
        return contact.email
      })
      .map(function(contact) {
        return React.createElement(FormItem, contact)
      })

    return (
      React.createElement('div', {
          className: 'FormView'
        },

        React.createElement('h1', {
          className: 'FormView-title'
        }, "Contacts"),

        React.createElement('ul', {
            className: 'FormView-list'
          },
          this.props.contacts.map(function(contact) {
            return React.createElement(FormItem, contact)
          })),

        React.createElement(Form, {
          value: this.props.newContact,
          onChange: this.props.onNewContactChange,
          onSubmit: this.props.onNewContactSubmit,
        })
      )
    )
  },
});
