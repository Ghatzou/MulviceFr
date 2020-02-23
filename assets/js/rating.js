/*
    we must add to the container of the stars that we want to be interactive the class "stars"
    each star item must have the class 'rating_star'
    we can have only 5 stars
    this system is so basic, we should have visuel effects
*/

let ckecked = 3;//initial star checked

document.addEventListener('DOMContentLoaded', () => {
    let stars = document.querySelectorAll('.stars .rating_star');
    stars.forEach(star => {
        star.addEventListener('click', setNewRating);
    });

    checked = 3;//initial star checked
    if (checked >= 0 && checked < 5)
        stars[ckecked - 1].dispatchEvent(new MouseEvent('click'));
});

function setNewRating(ev) {

    clickedStar = ev.currentTarget;
    let stars = document.querySelectorAll('.stars .rating_star');
    let doneAdding = false;
    let newRating = null;
    stars.forEach((star, index) => {
        if (doneAdding) {
            star.classList.remove('checked');
        }
        else {
            star.classList.add('checked');
        }

        if (star == clickedStar) {
            doneAdding = true;
            newRating = index + 1;
        }
    });

    if (doneAdding) {
        checked = index;
        //do http request with the newRating variable
    }
}
