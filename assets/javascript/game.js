var wordArray = ["fender", "gibson", "grestch","musicman","ibanez","prs","charvel"];

var hgame = {
    "rWord": wordArray[Math.floor(Math.random()*wordArray.length)],
    "score": 0,
    "incorrectGuesses": 0,
    "life": 13,
    "compare": function (keyPressed){
        //var largo = this.rWord.length;
        var flag = 0;
        for (var i=0; i < hgame.rWord.length; i++) {
            
            if( keyPressed == this.rWord[i]) {
                hgame.correct(keyPressed,i);
                flag = 1;
            }
            
        }
        if (flag == 0) {
           hgame.incorrect(keyPressed);
            //console.log(hgame.rWord[i]+" "+ i + " No");
        }
    },

    "arrGood" : [],
    "arrBad" : [],

    "correct" : function (letter,index) {
        //console.log(letter+" "+index+ " Si");
        for (var j=0; j< (hgame.arrGood.length) + 1; j++){
            if(hgame.arrGood[j] == letter){}
            else {
                hgame.arrGood[index] = letter;
                var newDiv = document.getElementById("letter" + index);
                newDiv.innerHTML = letter;
            }
        }
        //console.log("arrgood:" + hgame.arrGood);
    },

    "incorrect" : function (letter) {
        if (hgame.arrBad.indexOf(letter) == -1 && hgame.arrGood.indexOf(letter) == -1){
            hgame.arrBad.push(letter);
            hgame.life--;
            
            document.getElementById("life1").innerHTML = this.life;
            //console.log("arrbad" + hgame.arrBad);
            var targetDiv = document.getElementById("life");
            var newDiv = document.createElement("div");
            newDiv.textContent = letter+" , ";
            targetDiv.appendChild(newDiv);
               

        }       
    },
    
    "winCalc" : function () {
            if (hgame.arrGood.length == hgame.rWord.length){
            hgame.score++;
            document.getElementById("score").innerHTML = this.score;
            console.log(hgame.score);
            hgame.confim1r();
            

        }
    },
    
    "continue" : function () {
        this.rWord = wordArray[Math.floor(Math.random()*wordArray.length)];
        this.life = 13;
        this.arrBad = [];
        this.arrGood = [];
    },
 
    "restart" : function (){
        hgame.continue();
        this.score = 0;
    },
    
    "divAppend": function () {
        
        var targetDiv = document.getElementById("letters");
        
        for (var k =0; k < this.rWord.length; k++) {
            
            var newDiv = document.createElement("div");
            newDiv.textContent = "_";
            targetDiv.appendChild(newDiv);
            newDiv.setAttribute("id", "letter"+ k); 
            newDiv.setAttribute("class", "hidden" );   
        }
    },
    "confim1r": function(recieve) {
        var x = confirm("continue?");
        
    }
};

hgame.divAppend();

document.onkeypress = function(event){
    if(hgame.life > 0){
    var key = event.key;
    console.log(event.key);
    hgame.compare(key);
    hgame.winCalc();
    console.log(hgame.score);
    
}
else {
    alert("Game Over");     
}
    
};