
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function updateRandomNumber() {
        const randomNumberElement = document.getElementById('random-number');
        randomNumberElement.textContent = generateRandomNumber();
    }


    window.onload = updateRandomNumber;