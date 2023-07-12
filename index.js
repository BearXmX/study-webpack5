/*
 * @Date: 2022-06-03 20:33:11
 * @LastEditors: 熊明祥
 * @LastEditTime: 2022-06-04 22:10:42
 * @Description: 
 */
import '@/css/index.css'

const a = 'webpack5'

function b() {
  let CHARLES_ENV = process.env.CHARLES_ENV ? process.env.CHARLES_ENV : undefined

  if (!!CHARLES_ENV) {
    window.CHARLES_ENV = CHARLES_ENV

    console.log(`%c${CHARLES_ENV}`, 'padding: 2px 6px;color: #fff;background-color:#00b96b;border-radius: 2px');
  }
  console.log(a);
}

b()





