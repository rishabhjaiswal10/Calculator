let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let a=true;
let b=true;
let c=true;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == ("√")) {
            a=false;
            screenValue += buttonText;
            screen.value = screenValue;
            console.log(a);
        }
        else if (buttonText == ("±")) {
            screen.value = eval(screenValue*-1);
            screenValue = screen.value;
            console.log(a);
        }
        else if (buttonText == ("/®")) {
            b=false;
            screenValue += "/";
            screen.value = screenValue;
            console.log(a);
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = screenValue.slice(0,(screenValue.length-1));
            screen.value = screenValue;
        }
        else if (buttonText == '%') {
            c=false;
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            console.log(a);
            console.log(screenValue);
            if(b==false)
            {
                screen.value=eval(screenValue.replace("/","%"));
                screenValue=screen.value;
                b=true;
                
            }
            else if(a==false)
            {
                screen.value=eval(screenValue.slice(1,screenValue.length))**(1/2);
                screenValue=screen.value;
                a=true;
            }
            else if(c==false)
            {
                screen.value=eval(screenValue.replace("%","*0.01"));
                screenValue=screen.value;
                a=true;
            }
            screen.value = eval(screenValue);
            screenValue=screen.value;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

