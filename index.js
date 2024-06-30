
/* This changes the text of h1 in 5 seconds. Note 1 second = 1000ms.
In the set interval method, the first parameter is the function to be executed. */
function changeIntroOnPage(){
    let changeIntro = document.querySelector("h1");
    changeIntro.textContent = "I am a Front-End Developer"
    
}

setInterval(changeIntroOnPage, 5000);
//end of code 

