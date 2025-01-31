 let userscore=0;
 let compscore=0;
 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userscorePara = document.querySelector("#user-score");
 const compscorePara = document.querySelector("#comp-score");

 const genCompChoice = () => {
    const opt = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return opt[ranIdx];
 };

 const drawGame = () => {
    msg.innerText = "DRAW GAME!!";
    msg.style.backgroundColor = "#081b31";
 };

 const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win!!!! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `COMP Win!!!! Your ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
 };


 const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
 };

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
 });