const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Random text changes on button click', (done) => {
    // Load the HTML file as a string
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

    // Create a JSDOM instance with the HTML content
    const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });

    // Wait for the DOM content to be fully loaded
    const { window } = dom;
    const { document } = window;

    window.addEventListener('load', () => {
        // Get the button and random text element from the DOM
        const button = document.getElementById('randomButton');
        const randomTextElement = document.getElementById('randomText');
        
        // Make sure the button and randomTextElement exist
        expect(button).not.toBeNull();
        expect(randomTextElement).not.toBeNull();

        // Simulate a button click
        button.click();

        // Wait for the DOM to update
        setTimeout(() => {
            // Check that the random text has changed (non-empty text)
            expect(randomTextElement.textContent).not.toBe('');
            
            // Optionally, you can verify that it matches one of the expected random texts
            expect([
                'Hello World!',
                'Random is fun!',
                'Click me again!',
                'JavaScript is cool!',
                'This is some random text!'
            ]).toContain(randomTextElement.textContent);

            // End the test
            done();
        }, 100); // Added timeout to ensure DOM updates
    });
});
