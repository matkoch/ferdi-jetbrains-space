"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = () => {
    const chats = document.querySelector('#app [title="Chats"] > div');
    const directMessages = chats.textContent;
    const allMessages = chats.children.length;

    Ferdi.setBadge(directMessages, allMessages);
  };

  Ferdi.loop(getMessages);
  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
