'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDuration = 1000.5;
var bottom = undefined;
var messageInstance = undefined;
var key = 'unique';

function getMessageInstance() {
  messageInstance = messageInstance || _rcNotification2.default.newInstance({
    prefixCls: 'rk-message',
    style: {
      bottom: bottom
    } // 覆盖原来的样式
  });
  return messageInstance;
}

function notice(content) {
  var duration = arguments.length <= 1 || arguments[1] === undefined ? defaultDuration : arguments[1];
  var onClose = arguments[2];

  var instance = getMessageInstance();

  if (instance.component.state.notices.length) {
    instance.removeNotice(key);
  }

  instance.notice({
    key: key,
    duration: duration,
    style: {},
    content: content,
    onClose: onClose
  });
  return function destroy() {
    instance.removeNotice(key);
  };
}

exports.default = {
  show: function show(content, duration, onClose) {
    return notice(content, duration, onClose);
  },
  config: function config(options) {
    if (options.bottom) {
      bottom = options.bottom;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};