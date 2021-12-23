let keyPad=document.querySelector('.keypad');
let displayBox=document.querySelector('.display');
let operators=['+','-','*','/','%','.'];

let filter=x=>{//စာရိုက်လိုက်တဲ့ကောင်တေကိုစစ်တာ
    let current=displayBox.innerHTML;//string
    let lastoperator=current[current.length-1];
    if(current=='0' && x!='.'){  
        clearLast();
    }
    if(operators.includes(x) && operators.includes(lastoperator)){
            return false;
    }
    return true;
}

let showInDisplay=x=>{//စာရိုက်လိုက်တဲ့ကောင်တေ
    if(filter(x)){
        displayBox.innerHTML+=x;
    }
};
let calc=()=>displayBox.innerHTML=eval(displayBox.innerHTML);
let clearAll=_=>displayBox.innerHTML='';
let clearLast=_=>displayBox.innerHTML=displayBox.innerHTML.substring(0,displayBox.innerHTML.length-1);