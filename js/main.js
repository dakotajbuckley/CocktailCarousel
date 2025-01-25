// let slideIndex = 0;
// showSlides()

// function showSlides() {
//     let slides = document.querySelectorAll('div')
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }

//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000)
// }

// function grabDrink() {
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb
//     })
//     setTimeout(grabDrink, 3000)
// }
// console.log(displayContainer)

function moveElements() {
    let displayContainer = document.querySelector('.drinkDisplayContainer')
    let lastChild = document.querySelector('.drinkDisplayContainer > *:last-child')
    let image = document.querySelector('.drinkDisplayContainer > *:last-child > img')
    lastChild.style.display = 'none'
    // fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    // .then(res => res.json())
    // .then(data => image.src = data.drinks[0].strDrinkThumb)
    displayContainer.prepend(lastChild)
    lastChild.style.display = 'block'
    



    setTimeout(moveElements, 5000)
}