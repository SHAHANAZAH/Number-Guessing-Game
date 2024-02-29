let guesses=0;
const answer=Math.floor(Math.random()*10+1);
document.getElementById("sub").onclick=function(){
    let guess=document.getElementById("in").value;
    guesses+=1;

    if(guess==answer){
     alert(`${answer} is the number.It took you ${guesses} guesses`);
    }
    else if(guess<answer){
        alert("Too small");
    }
    else{
        alert("Too large");
    }
}