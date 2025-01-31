const url = "https://cat-fact.herokuapp.com/facts";
let catfact = document.querySelector("#fact");
let cafact = document.querySelector("#fa");
const getFacts = async () => {
    console.log("getting data ....");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    catfact.innerText = data[0].text;
};
cafact.addEventListener("click",getFacts);