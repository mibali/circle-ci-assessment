document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('randomButton');
    const randomTextElement = document.getElementById('randomText');

    const randomTexts = [
        'Hello World!',
        'Random is fun!',
        'Click me again!',
        'JavaScript is cool!',
        'This is some random text!'
    ];

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * randomTexts.length);
        randomTextElement.textContent = randomTexts[randomIndex];
    });
});
