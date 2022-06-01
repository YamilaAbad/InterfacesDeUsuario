document
    .querySelector('.heart')
    .addEventListener('click', ($event) => {
        $event.target.classList.toggle('on')
    })
