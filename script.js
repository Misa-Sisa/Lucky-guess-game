const heading = document.createElement("h1");
heading.textContent = "Wähle eine Zahl zwischen 1 und 5";
document.body.appendChild(heading);



const newGame = () => {
    attempts = 0;
    playAgain.remove();
    rndNumber;
}

let attempts = 0;

const score = document.createElement("h2");
document.body.appendChild(score);
score.textContent = `The number of attempts is: ${attempts}`;

let btn;
let clickedNumber;

const startNewGame = () => {

    score.textContent = `The number of attempts is: ${attempts}`;

    const makeRndNumber = () => {
    const rndNumber = Math.floor(Math.random() * 5) + 1;
    console.log(rndNumber);
    return rndNumber;
    }

    let rndNumber = makeRndNumber();

    console.log(`game number is ${rndNumber}`);
    const div = document.createElement("div");
    document.body.appendChild(div);

    for (let i = 0; i < 5; i++) {
        btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.value = i + 1;
        btn.id = i + 1;
        div.appendChild(btn);
        rndNumber;

        btn.addEventListener("click",
            (event) => {
            clickedNumber = event.target.id;
            console.log(clickedNumber);

            if (clickedNumber == rndNumber) {
                console.log(`${clickedNumber} is the right number`);

                const winSlogan = document.createElement("h2");
                document.body.appendChild(winSlogan);
                winSlogan.textContent = "Right guess! Good job";

                const playAgain = document.createElement("button");
                document.body.appendChild(playAgain);
                playAgain.textContent = "Play again";

                div.textContent = "You won!";

                playAgain.addEventListener("click", () => {
                    attempts = 0;
                    playAgain.remove();
                    startNewGame();
            });

            } else if (clickedNumber !== rndNumber) {
                console.log(`wrong number was clicked`);
                attempts++;
            }

            score.textContent = `The number of attempts is: ${attempts}`;
            
        });
    };
};

const startGame = startNewGame();

console.log(clickedNumber);
console.log(attempts);


