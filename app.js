const exitButton = document.querySelector('.exit')
const nav = document.querySelector('nav')

console.log(exitButton)
console.log(nav)


// close header
const closeHeader = () => {
    nav.classList.add('hidden')
}


const rightArrow = document.querySelector('.rightArrow')
const alumniImages = document.querySelector('.imageContainer')
const leftArrow = document.querySelector('.leftArrow')

// scroll alumni work right
const scrollAlumni = (direction) => {
    if(direction === 'right'){
        alumniImages.classList.toggle('scrollRight')
        alumniImages.classList.remove('scrollLeft')
        
    } else if(direction === "left"){
        alumniImages.classList.toggle('scrollLeft')
        alumniImages.classList.remove('scrollRight')
    }
}


const backgroundImages = document.querySelector('.images')

// fade in background images 
// realized i dont need to do this bc i want it to happen on page load. i can just do a keyframe
const fadeIn = () => {
    backgroundImages.classList
}
