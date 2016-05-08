import Notification from 'rc-notification'

const defaultDuration = 1000.5
let bottom
let messageInstance
const key = 'unique'

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance({
    prefixCls: 'rk-message',
    style: {
      bottom
    } // 覆盖原来的样式
  })
  return messageInstance
}

function notice (content, duration = defaultDuration, onClose) {
  const instance = getMessageInstance()

  if (instance.component.state.notices.length) {
    instance.removeNotice(key)
  }

  instance.notice({
    key,
    duration,
    style: {},
    content,
    onClose
  })
  return function destroy () {
    instance.removeNotice(key)
  }
}

export default {
  show (content, duration, onClose) {
    return notice(content, duration, onClose)
  },
  config (options) {
    if (options.bottom) {
      bottom = options.bottom
    }
  },
  destroy () {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  }
}
