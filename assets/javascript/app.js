$(document).ready (

	function() {


	var questionArray = [

	{
		question: "Q1?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "A",
	}, 

	{ 
		question: "Q2?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "B",
	},

	{
		question: "Q3?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "C",
	},

	{
		question: "Q4?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "D",
	},

	{
		question: "Q5?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "A",
	},

	{
		question: "Q6?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "B",
	},

	{
		question: "Q7?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "C",
	},

	{
		question: "Q8?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "D",
	},

	{
		question: "Q9?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "A",
	},

	{
		question: "Q10?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "B",
	},

	{
		question: "Q11?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "C",
	},

	{
		question: "Q12?",
		possibleAnswers: ["A", "B", "C", "D"],
		correctAnswer: "D",
	}

	//close question array
	];

	var counters = {
		currentQuestion: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		timesUp: 0,
	}

	var timer = 15;

	console.log(questionArray);

	function setGame () {
		$("#messageColumn").html("<button type='button' class='btn btn-default btn-lg' id='start-game'>Let's begin! <span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span></button>");
		$("#start-game").on("click", function () {
			playGame ();
		});
	}
	setGame ();

	function startTimer () {
		var time = setInterval (decrement, 1000);
			function decrement () {
				timer--;
				$("#timerColumn").html("You have " + timer + " seconds remaining.");
				if (timer === 0) {
					clearInterval(time);
					timeExpired ();
					timer = 15;
				}
			}
	}

	function printQuestion () {

		//run all 12 questions
		if (counters.currentQuestion < questionArray.length) {
			$("#currentQuestionColumn").append(questionArray[counters.currentQuestion].question);
			$("#answerOne").append(questionArray[counters.currentQuestion].possibleAnswers[0]);
			$("#answerTwo").append(questionArray[counters.currentQuestion].possibleAnswers[1]);
			$("#answerThree").append(questionArray[counters.currentQuestion].possibleAnswers[2]);
			$("#answerFour").append(questionArray[counters.currentQuestion].possibleAnswers[3]);
			startTimer ();
		}

		else {
			console.log("NO MORE questions")
			setTimeout(function () {
				$("#questionAnswerRow").show();
				$("#messageColumn").html("Finito! Let's see your stats. <br>");
				endGame();
				}, 2000);
		}

	}

	function emptyQuestionAnswers () {
		$("#currentQuestionColumn").empty();
		$("#answerOne").empty();
		$("#answerTwo").empty();
		$("#answerThree").empty();
		$("#answerFour").empty();
	}

	function correctAnswer () {
		emptyQuestionAnswers ();
		$("#messageColumn").html("Rawr! That was the correct answer!");
		counters.correctAnswers++;
		console.log(counters.correctAnswers);
		counters.currentQuestion++;
		console.log(counters.currentQuestion);
		printQuestion();
		$("#questionAnswerRow").hide ();
		setTimeout(function () {
			$("#questionAnswerRow").show();
			$("#messageColumn").empty(); 
			}, 1000);
			// $("#messageColumn").hide();
	}

	function incorrectAnswer () {
		emptyQuestionAnswers ();
		// $("#questionAnswerRow").hide();
		$("#messageColumn").html("Phlgbttt! That was incorrect! <br> The correct answer was: <br>" + questionArray[counters.currentQuestion].correctAnswer);
		counters.incorrectAnswers++;
		console.log(counters.incorrectAnswers);
		counters.currentQuestion++;
		console.log(counters.currentQuestion);
		printQuestion();
		$("#questionAnswerRow").hide ();
		setTimeout(function () {
			$("#questionAnswerRow").show();
			$("#messageColumn").empty();
			}, 1000);
	}

	function timeExpired () {
		emptyQuestionAnswers ();
		$("#messageColumn").html("Womp womp! The timer ran out. <br> The correct answer was: <br>" + questionArray[counters.currentQuestion].correctAnswer);
		counters.timesUp++;
		console.log(counters.timesUp);
		counters.currentQuestion++;
		console.log(counters.currentQuestion);
		printQuestion();
		$("#questionAnswerRow").hide ();
		setTimeout(function () {
			$("#questionAnswerRow").show();
			$("#messageColumn").empty();
			}, 1000);
	}


	function playGame () {

			$("#messageColumn").empty();

			console.log(questionArray[0].question);

			printQuestion ();
			
					//Capture user answer selection click
					$(".possibleAnswer").on("click", function() {


						//convert selection into string
						if (this.id == "answerOne") {
							selection = "A";
							console.log(selection);
						}

						else if (this.id == "answerTwo") {
							selection = "B";
							console.log(selection);
						}

						else if (this.id == "answerThree") {
							selection = "C";
							console.log(selection);
						}

						else {
							selection = "D";
							console.log(selection);
						}

						//match selection string to question's correct answer
						if (selection == questionArray[counters.currentQuestion].correctAnswer) {
							correctAnswer ();
							console.log("Yay!");
						}

						else {
							incorrectAnswer ();
							console.log("Nope!");
						}

					//close on-click function
					});

	//close playGame function
	}

	function  endGame () {
		emptyQuestionAnswers ();
		// $("#messageColumn").html("Finished! Let's see your stats!");
		setTimeout(function () {
			$("#messageColumn").append("You answered " + counters.correctAnswers + " questions correctly! <br>");
			$("#messageColumn").append("You answered " + counters.incorrectAnswers + " questions incorrectly. <br>");
			$("#messageColumn").append("You ran out of time on " + counters.timesUp + " questions. <br>");
		}, 2000);

		setTimeout(function () {
			$("#messageColumn").append("<button type='button' class='btn btn-default btn-lg' id='replay-game'>Replay? <span class='glyphicon glyphicon-repeat' aria-hidden='true'></span></button>");
			$("#replay-game").on("click", function () {
				console.log("Again?!");
				resetGame ();
			});
			}, 4000);
	}

	function resetGame () {
		emptyQuestionAnswers ();
		counters.currentQuestion = 0;
		counters.correctAnswers = 0;
		counters.incorrectAnswers = 0;
		counters.timesUp = 0;
		setGame ();
	}

// close document ready function
});