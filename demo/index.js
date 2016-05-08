import React from 'react'
import { render } from 'react-dom'
import Toast from '../src/index'

require('../assets/index.less')
let index = 0
const Demo = (
  <div>
    <button
      onClick={e => {
        ++index
        Toast.show(`请完整填写姓名、身份证号码请完整填写姓名、身份证号码请完整填写姓名、身份证号码${index}`, 4)
      }}
    >
    点击
    </button>
  </div>
)

render(Demo, document.getElementById('main'))
