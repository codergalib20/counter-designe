let counters = document.querySelectorAll('.counter')
let time = 1000

counters.forEach(counter => {
    let updateCounter = () => {
        let target = + counter.getAttribute('data-target')
        let count = +counter.innerText

        let increment = target / time

        if(count < target) {
            counter.innerText = Math.ceil(count + increment)
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})
