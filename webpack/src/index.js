import generateJoke from "./generateJocks"
import { v4 as uuidv4 } from 'uuid'
import './style/main.scss'
import logo from './asset/logo.png'
import generateJocks from "./generateJocks";

const data = document.getElementById('logo')
data.src = logo

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJocks()
// console.log(generateJoke())
console.log(uuidv4())
console.log('hello')
// $ npm run build