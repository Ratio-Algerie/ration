const containerEl = document.querySelector('.p11')

const careers = [
    "work 100% remotely",
    "have clients from all over the world",
    "have the best graphic designers",
    "do print",
    "have expert video editors",
    "build perfect websites"
];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
    characterIndex++;

    containerEl.innerHTML = `<p>We ${careers[careerIndex].slice(0, characterIndex)}</p>`;

    if (characterIndex === careers[careerIndex].length) {
        characterIndex = 0;
        careerIndex++;
        if (careerIndex === careers.length) {
            careerIndex = 0;
        }
    }

    setTimeout(updateText, 250);
}

updateText();
