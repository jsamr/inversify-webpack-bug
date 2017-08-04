import { inject, injectable, named } from 'inversify'
import './inversify.config'

@injectable()
class Tata {
  @inject('string')
  @named('config-url')
  public url: string
}

const url = new Tata().url
const urlDOM = document.getElementById('URL')

if (url === undefined) {
  urlDOM.innerText = 'URL is undefined'
  urlDOM.setAttribute('style', 'color: red;')
} else {
  urlDOM.innerText = `URL is : ${url}`
  urlDOM.setAttribute('style', 'color: green;')
}
