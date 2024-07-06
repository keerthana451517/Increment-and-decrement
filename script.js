document.addEventListener('DOMContentLoaded', function() {
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const countDisplay = document.getElementById('count');

    let count = 0;

    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            countDisplay.textContent = count;
        }
    });

    incrementBtn.addEventListener('click', function() {
        count++;
        countDisplay.textContent = count;
    });
});
