let dice = document.querySelector("#dice");
let line = document.querySelector("#line");
let advice = document.querySelector("#advice");

dice.addEventListener("click", setAdvice)

async function setAdvice() {
    console.log("hello");
    const data = await getAdvice();
    line.textContent = `ADVICE #${data.id}`;
    const adviceText = data.advice;
    advice.textContent = `"${adviceText}"`;
    advice.style.fontSize = `${magic(adviceText.length)}px`;
}

const getAdvice = async () => {
    try {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        return data.slip;
    } catch (e) {
        console.log("Error while geting data", e);
    }
}

function magic(length){ // long string font-size handling
    if (length < 70){
        return 28;
    }
    else if (length < 80)
    {
        return 26;
    }
    else if (length < 100)
    {
        return 24;
    }
    else if (length < 120)
    {
        return 20;
    }
    else{
        return 16;
    }
}
setAdvice();
