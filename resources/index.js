const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]
const button = document.getElementsByClassName('resume')[0]
const hoverLink = document.getElementsByClassName('resume-word')[0]

toggleButton.addEventListener('click',() => {
    navBarLinks.classList.toggle('active')
})

button.addEventListener('mouseover', () => {
    hoverLink.style.color = "white";
})
button.addEventListener('mouseout', () => {
    
    hoverLink.style.color="#3d115f";
})