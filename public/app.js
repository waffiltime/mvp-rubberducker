'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      messages: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onSearch',
    value: function onSearch(message) {
      console.log(message);
      console.log('Talking to Rubber Ducker');
      fetch('/../rec', {
        method: 'POST',
        body: JSON.stringify({
          incmessage: message
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        console.log('response = ', response.json());
        //this.state.messages setState with response
        return response.json();
      }).then(function (json) {
        console.log('json =', json);
      });
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Meet Rubber Ducker, your new favorite HIR'
        ),
        React.createElement('img', { src: '/resources/duck.jpg' }),
        React.createElement(Messages, { messages: this.state.messages }),
        React.createElement(Search, { onSearch: this.onSearch.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));