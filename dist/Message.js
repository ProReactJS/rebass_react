
var React = require('react');
var ThemeClassMixin = require('./ThemeClassMixin');

module.exports = React.createClass({displayName: "exports",

  mixins: [ThemeClassMixin],

  getInitialState: function() {
    return {
      visible: true
    }
  },

  getDefaultProps: function() {
    return {
      theme: 'light-gray'
    };
  },

  dismiss: function() {
    this.setState({ visible: false });
  },

  render: function() {
    var classes = this.getThemeClasses();
    var messageClass = 'bold flex flex-center mb2 rounded ' + classes.main;
    var style = {
      display: this.state.visible ? '' : 'none'
    };
    return (
      React.createElement("div", {className: messageClass, style: style}, 
        React.createElement("div", {className: "flex-auto p2"}, 
          this.props.children
        ), 
        React.createElement("a", {href: "#!", 
          onClick: this.dismiss, 
          className: "h3 button white", 
          title: "Dismiss"}, 
            "×"
        )
      )
    )
  }

});

