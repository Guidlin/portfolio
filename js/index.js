// mainText
const finalGreetingMessage = 'console.log("Hi, I’m Elliot, web developer.");';
const titleCode = document.getElementById("titleCode")

let greetingMessage = '';

function highlightSyntax(code) {
    // check for keywords
    if (code.includes("function")) {
        code = code.replaceAll("function","<span class='syntax-func'>function</span>");
    }
    if (code.includes("greeting")) {
        code = code.replaceAll("greeting","<span class='syntax-func-name'>greeting</span>")
    } 
    if (code.includes("console")) {
        code = code.replaceAll("console", "<span class='syntax-console'>console</span>")
    } 
    if (code.includes("log")) {
        code = code.replaceAll("log", "<span class='syntax-func-name'>log</span>")
    } 
    if (code.includes('"Hi, I’m Elliot, web developer."')) {
        code = code.replaceAll('"Hi, I’m Elliot, web developer."', '<span class="syntax-text">"Hi, I’m Elliot, web developer."</span>')
    } 
    if (code.includes("}")) {
        code = code.replaceAll("}", "<span class='syntax-specialChar'>}</span>")
    }
    
    return code;
}


let i = 0;
function titleCodeLoop() {
    setTimeout(() => {
        let currentChar = finalGreetingMessage.charAt(i);

        switch (currentChar) {
            case "/":
                greetingMessage = greetingMessage+"<br />";
                break;
            case "&":
                greetingMessage = greetingMessage+"&nbsp;";
                break;
            default:
                greetingMessage = greetingMessage + finalGreetingMessage.charAt(i);
                titleCode.innerHTML = highlightSyntax(greetingMessage);
        }
        
        i++;
        if (i < finalGreetingMessage.length) {
            titleCodeLoop();
        } else {
            setTimeout(() => {
                titleCode.innerHTML = "Hi, I’m Elliot, web developer.";
                titleCode.style.fontSize = "calc(1rem + 5vw)";
                titleCode.style.fontWeight = "bold";
                titleCode.style.minHeight = "calc(1rem + 5vw)";
                titleCode.style.width = "fit-content";
                titleCode.style.maxWidth = "80vw";
                document.getElementById("titleCodeContainer").style.textAlign = "center";
                
            }, 900)
        }
    }, 100)
}

titleCodeLoop();
