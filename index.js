const ourItemDiv = document.getElementsByClassName('item');
const openIcons = document.getElementsByClassName('iconOpen')
const closeIcons = document.getElementsByClassName('iconClose')



for (let i = 0; i < ourItemDiv.length; i++) {
    closeIcons[i].style.display = "none";

    ourItemDiv[i].addEventListener('click', () => {
        const result = ourItemDiv[i].classList.toggle("active");

        if (result) {
            closeIcons[i].style.display = "block";
            openIcons[i].style.display = "none";
        } else {
            openIcons[i].style.display = "block";
            closeIcons[i].style.display = "none";
    }
    })
}