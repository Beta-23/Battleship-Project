window.onload = function() {
    // console.log("linked");
    $("#reset").on("click", function(){
    	reset();
	});
    var target;
    var playerTarget;
    var computerHits = [];

    playGame = function(){
    	// if(readyToPlay === true)  { 
	    // for (var i = 0; i < 50; i++){

		// function to click to set computer target on board
		    $("[id^=cell]").on('click', function(){
		    	var temp = this.id;
		    	console.log("click heard on id " + temp);
/*
				if (temp == playerTarget){
	    			alert("You have selected your ship location");
	    		} 
	    		else if(temp > 25){	
		    		// console.log("draw ship at " + temp);
		    		$("#" + temp).css('background-color', '#FFF');
		    		$("#" + (temp + 1)).css('background-color', '#FFF');
		    	
		    	} else
*/
				temp = temp.replace("cell", "");
	    		if(temp <= 25 && temp == target){
		    			console.log("HIT!");
		    			$("#cell" + temp).css('background-color', '#F00');
		    			alert("Yarr..You sunk my ship!");
		    			return; 

		    	} else if(temp <= 25 && temp !== target){
		    			console.log("MISS!");
		    			$("#cell" + temp).css('background-color', '#FFF');
		    			alert("You MISSED!");
		    	} else {
		    		console.log('nothing worked');
		    	}

		    	computerRadarRamdomly();
		    });
		//}
	};
    // Places ships randomly on the board
    // //Function to place the ships in the grid//
    placeShipsRandomly = function() {
		var shipCoords;
		var randomInt = Math.floor(Math.random() * 25);
		target = randomInt;
		playerTarget = randomInt;
		console.log("target placed at block " + randomInt);
		return target;
	};
//my thinking// this function ramdomly picks an interger for the computer board//
//
	computerRadarRamdomly = function(){

		var randomInt = Math.floor(Math.random() * 25) + 25;
		computerHits.push(randomInt);
		for (var i = 1; i < computerHits.length + 1; i++){
			while(computerHits[i] === randomInt){
				randomInt = Math.floor(Math.random() * 25) + 25;

			}
			if(randomInt === playerTarget){
				$("#cell" + randomInt).css('background-color', '#F00');
				alert("I sank your ship at cell " + randomInt);
			} else {
				$("#cell" + randomInt).css('background-color', '#FFF');
				alert("Enemy missed your ship at cell " + randomInt);
			}	
		}
		
	};

//Event listener that calls placeShip on computer board and set the ready button for player to choose box//
	$("#letsPlay").on("click" ,function(){
		placeShipsRandomly(); 
		$("#message").append("<p>Pick a square on the PLAYER grid below to place your ship, then click 'Ready'</p>");
		$("#ready").show();
		
		 $(".playerRow").find("td").on('click', function(){
	    	playerTarget = this.id;
	    	console.log("player target is " + playerTarget);
	    	$("#" + playerTarget).css('background-color', '#000');
		 });
	});

//this function starts the playGame://

	$("#ready").on('click', function(){
		playGame();
	});
};
//this function clears the whole board//
function reset(){
console.log("clear button works");
	$(".cell").css("background-color","#3636c5");

}