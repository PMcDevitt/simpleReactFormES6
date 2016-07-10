var FormItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('div', {
          className: 'FormItem'
        },
        React.createElement('div', {
          className: 'FormItem-name'
        }, this.props.name),
        React.createElement('div', {
          className: 'FormItem-email'
        }, this.props.email),
        React.createElement('div', {
          className: 'FormItem-description'
        }, this.props.description)
      )
    )
  },
});
