import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import Data from'../public/data/DATA.json'

console.log('Hello Coders! :)');

// hamburger
const hamburger = document.querySelector('.header__hamburger')
const navList = document.querySelector('.nav-list')
const navItem = document.querySelector('.nav-list__item a')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('clicked')
    navList.classList.toggle('.nav-list--active')
    navItem.focus()
})

// navbar
const header = document.querySelector('header')

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
});

// restaurant card
const restaurantList = document.querySelector('.restaurant-list') 
const restaurantData = Data.restaurants

restaurantData.forEach((data)=>{
  const restaurantItem = document.createElement('div')
  restaurantItem.classList.add('restaurant-item')

  const restaurantImg = document.createElement('img')
  restaurantImg.classList.add('restaurant-item__img')
  restaurantImg.src = data.pictureId
  restaurantImg.alt = `Gambar restaurant bernama ${data.name}`
  restaurantImg.setAttribute('tabindex', '0')

  const restaurantBody = document.createElement('div')
  restaurantBody.classList.add('restaurant-item__body')
  
  const restaurantRating = document.createElement('h3')
  restaurantRating.classList.add('restaurant-item__rating')
  restaurantRating.innerText = `Rating: ${data.rating}`
  restaurantRating.setAttribute('tabindex', '0')

  const restaurantName = document.createElement('h3')
  restaurantName.classList.add('restaurant-item__name')
  restaurantName.innerText = data.name
  restaurantName.setAttribute('tabindex', '0')

  const restaurantDescription = document.createElement('p')
  restaurantDescription.classList.add('restaurant-item__description')
  restaurantDescription.innerText = data.description
  restaurantDescription.setAttribute('tabindex', '0')
  
  const restaurantCity = document.createElement('p')
  restaurantCity.classList.add('restaurant-item__city')
  restaurantCity.innerText = `Kota. ${data.city}`
  restaurantCity.setAttribute('tabindex', '0')

  restaurantBody.append(restaurantCity, restaurantRating,restaurantName,restaurantDescription)

  restaurantItem.append(restaurantImg, restaurantBody)
  
  restaurantList.appendChild(restaurantItem)
})