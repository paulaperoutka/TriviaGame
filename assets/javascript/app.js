$(document).ready (
	function() {

	var questionArray = [

	{
		question: "What is the biological kingdom for all animals?",
		possibleAnswers: ["Animalia", "Archaea", "Animalis", "Classis"],
		correctAnswer: "Animalia",
	}, 

	{ 
		question: "Which of these higly intelligent animal species has been known to use tools?",
		possibleAnswers: ["Dolphin", "Crow", "All three", "Octopus"],
		correctAnswer: "All three",
	},

	{
		question: "What is the scientific name for the red fox?",
		possibleAnswers: ["Vulpes volpes", "Vulpes rubicundus", "Vulpes primus", "Vulpes vulpes"],
		correctAnswer: "Vulpes vulpes",
	},

	{
		question: "The great horned owl does not have which sense?",
		possibleAnswers: ["taste", "smell", "sight", "touch"],
		correctAnswer: "smell",
	},

	{
		question: "Humans share what percentage of DNA with chimps, the closest living species?",
		possibleAnswers: ["92", "98.8", "86.3", "90.1"],
		correctAnswer: "98.8",
	},

	{
		question: "The ______________ has been around for more than 30 million years.",
		possibleAnswers: ["Honey Bee", "Spider", "Beetle", "Dragonfly"],
		correctAnswer: "Honey Bee",
	},

	{
		question: "For cats, which of these has 32 muscles each?",
		possibleAnswers: ["Toe", "Eyelid", "Paw", "Ear"],
		correctAnswer: "Ear",
	},

	{
		question: "What is the most poisonous fish in the world?",
		possibleAnswers: ["Beta Fish", "Lion Fish", "Stone Fish", "Guppie"],
		correctAnswer: "Stone Fish",
	},

	{
		question: "An elephant can smell water up to how many miles away?",
		possibleAnswers: ["2.7", "1", "3", "1.4"],
		correctAnswer: "3",
	},

	{
		question: "At birth, what is smaller than a mouse and weighs roughly only 4 oz.?",
		possibleAnswers: ["Kangaroo", "Squirrel", "Killer Whale", "Panda"],
		correctAnswer: "Panda",
	},

	{
		question: "________ have been around since before dinosaurs?",
		possibleAnswers: ["Ostriches", "Sharks", "Fleas", "Tortoises"],
		correctAnswer: "Sharks",
	},

	{
		question: "What is the world's largest land predator?",
		possibleAnswers: ["Polar Bear", "Grizzly Bear", "Wild Boar", "Rhinoceros"],
		correctAnswer: "Polar Bear",
	}

	//close question array
	];

	var counters = {
		currentQuestion: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		timesUp: 0,
	}

	console.log(questionArray);

	var timer = 5;
	var intervalId;

	function startTimer () {
		$("#timerColumn").show();
		intervalId = setInterval (decrement, 1000);
			function decrement () {
				timer--;
				$("#timerColumn").html("You have " + timer + " seconds remaining.");
				if (timer === 0) {
				timeExpired ();
			}
			}
			
	}

	function setGame () {
		$("#messageColumn").html("<button type='button' class='btn btn-default btn-lg' id='start-game'>Let's begin! <span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span></button>");
		$("#start-game").on("click", function () {
			timer=5;
			playGame ();
		});
	}
	setGame ();

	function printQuestion () {

		//run all 12 questions
		if (counters.currentQuestion < questionArray.length) {
			$("#currentQuestionColumn").append(questionArray[counters.currentQuestion].question);
			$("#answerOne").append(questionArray[counters.currentQuestion].possibleAnswers[0]);
			$("#answerTwo").append(questionArray[counters.currentQuestion].possibleAnswers[1]);
			$("#answerThree").append(questionArray[counters.currentQuestion].possibleAnswers[2]);
			$("#answerFour").append(questionArray[counters.currentQuestion].possibleAnswers[3]);
		}

		else {
			console.log("No More questions")
			$("#timerColumn").hide();
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
		$("#timerColumn").empty();
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
		timer = 5;
	}

	function incorrectAnswer () {
		emptyQuestionAnswers ();
		$("#timerColumn").empty();
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
		timer = 5;
	}

function timeExpired () {
	clearInterval(intervalId);
	startTimer ();
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
	timer = 5;
}


	function playGame () {

			$("#messageColumn").empty();
			console.log(questionArray[0].question);

			printQuestion ();
			startTimer ();

			
					//Capture user answer selection click
					$(".possibleAnswer").on("click", function() {


						//convert selection into string
						if (this.id == "answerOne") {
							selection = questionArray[counters.currentQuestion].possibleAnswers[0];
							console.log(selection);
						}

						else if (this.id == "answerTwo") {
							selection = questionArray[counters.currentQuestion].possibleAnswers[1];
							console.log(selection);
						}

						else if (this.id == "answerThree") {
							selection = questionArray[counters.currentQuestion].possibleAnswers[2];
							console.log(selection);
						}

						else {
							selection = questionArray[counters.currentQuestion].possibleAnswers[3];
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
		clearInterval(intervalId);
		$("#timerColumn").hide();
		emptyQuestionAnswers ();
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
		timer=5;
		setGame ();
	}

// close document ready function
});