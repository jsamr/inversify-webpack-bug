import './inversify.config'
import Foo from './Foo'

const url = new Foo().url
const urlDOM = document.getElementById('URL')

if (url === undefined) {                     // <= this is what actually happens
  urlDOM.innerText = 'URL is undefined'
  urlDOM.setAttribute('style', 'color: red;')
} else {                                     // <= this is what I would expect
  urlDOM.innerText = `URL is : ${url}`
  urlDOM.setAttribute('style', 'color: green;')
}
