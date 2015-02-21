/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.jsx');
var Body = require('./Body.jsx');
var TOC = require('./TOC.jsx');
var Footer = require('./Footer.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      toc: []
    }
  },

  componentDidMount: function() {
    var toc = [];
    var $body = this.refs.body.getDOMNode();
    var $sections = $body.querySelectorAll('section');
    for (var i = 0; i < $sections.length; i++) {
      var section = $sections.item(i);
      toc.push({
        name: section.id,
        title: section.dataset.title
      });
    }
    this.setState({ toc: toc });
  },

  render: function() {
    return (
      <div>
        <Header {...this.props} />
        <div className="sm-flex mxn2">
          <div className="sm-col-8 px2">
            <Body ref="body" {...this.props} />
          </div>
          <div className="sm-col-4 px2 py4">
            <TOC items={this.state.toc} />
          </div>
        </div>
        <Footer {...this.props} />
      </div>
    )
  }

});

