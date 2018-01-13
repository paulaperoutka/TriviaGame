$(document).ready (
	function() {

	var questionArray = [

	{
		question: "What is the biological kingdom for all animals?",
		possibleAnswers: ["Animalia", "Archaea", "Animalis", "Classis"],
		correctAnswer: "Animalia",
		answerImg: "<img id='img' src='assets/images/img1.jpg'>"
	}, 

	{ 
		question: "Which of these highly-intelligent animals has been known to use tools?",
		possibleAnswers: ["Dolphin", "Crow", "Octopus", "All three"],
		correctAnswer: "All three",
		answerImg: ("<img id='img' src='assets/images/img2i.jpg'>" + "<img id='img' src='assets/images/img2ii.jpg'>" + "<img id='img' src='assets/images/img2iii.jpg'>")
	},

	{
		question: "What is the scientific name for the red fox?",
		possibleAnswers: ["Vulpes volpes", "Vulpes rubicundus", "Vulpes primus", "Vulpes vulpes"],
		correctAnswer: "Vulpes vulpes",
		answerImg: "<img id='img' src='assets/images/img3.jpg'>"
	},

	{
		question: "The great horned owl does not have which sense?",
		possibleAnswers: ["taste", "smell", "sight", "touch"],
		correctAnswer: "smell",
		answerImg: "<img id='img' src='assets/images/img4.jpg'>"
	},

	{
		question: "Humans share what percentage of DNA with chimps, the closest living species?",
		possibleAnswers: ["92", "98.8", "86.3", "90.1"],
		correctAnswer: "98.8",
		answerImg: "<img id='img' src='assets/images/img5.jpg'>"
	},

	{
		question: "The ______ has been around for more than 30 million years.",
		possibleAnswers: ["Honey Bee", "Spider", "Beetle", "Dragonfly"],
		correctAnswer: "Honey Bee",
		answerImg: "<img id='img' src='assets/images/img6.jpg'>"
	},

	{
		question: "In cats, which of these has 32 muscles each?",
		possibleAnswers: ["Toe", "Eyelid", "Paw", "Ear"],
		correctAnswer: "Ear",
		answerImg: "<img id='img' src='assets/images/img7.jpg'>"
	},

	{
		question: "What is the most poisonous fish in the world?",
		possibleAnswers: ["Beta Fish", "Lion Fish", "Stone Fish", "Guppy"],
		correctAnswer: "Stone Fish",
		answerImg: "<img id='img' src='assets/images/img8.jpg'>"
	},

	{
		question: "An elephant can smell water up to how many miles away?",
		possibleAnswers: ["2.7", "1", "3", "1.4"],
		correctAnswer: "3",
		answerImg: "<img id='img' src='assets/images/img9.jpg'>"
	},

	{
		question: "At birth, what is smaller than a mouse and weighs roughly only 4 oz.?",
		possibleAnswers: ["Kangaroo", "Squirrel", "Killer Whale", "Panda"],
		correctAnswer: "Panda",
		answerImg: "<img id='img' src='assets/images/img10.jpg'>"
	},

	{
		question: "________ have been around since before dinosaurs?",
		possibleAnswers: ["Ostriches", "Sharks", "Fleas", "Tortoises"],
		correctAnswer: "Sharks",
		answerImg: "<img id='img' src='assets/images/img11.jpg'>"
	},

	{
		question: "What is the world's largest land predator?",
		possibleAnswers: ["Polar Bear", "Grizzly Bear", "Wild Boar", "Rhinoceros"],
		correctAnswer: "Polar Bear",
		answerImg: "<img id='img' src='assets/images/img12.jpg'>"
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

	var timer = 20;
	var intervalId;

	function startTimer () {

			$("#timerColumn").show();
			intervalId = setInterval (decrement, 1000);
				function decrement () {
					timer--;
					$("#timerColumn").html("You have " + timer + " seconds remaining.");
					if (timer === 0) {
					timeExpired ();}
				}

	}

	function setGame () {
		$("#messageColumn").html("<button type='button' class='btn btn-default btn-lg' id='start-game'>Let's begin! <span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span></button>");
		$("#start-game").on("click", function () {
			timer=20;
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
			$("#timerColumn").hide();
			$("#messageColumn").html("Finito! Let's see your stats. <br>");
			console.log("No More questions")
			setTimeout(function () {
				$("#questionAnswerRow").show();
				endGame();
				}, 3000);
		}

	}

	function emptyQuestionAnswers () {
		$("#currentQuestionColumn").empty();
		$("#answerOne").empty();
		$("#answerTwo").empty();
		$("#answerThree").empty();
		$("#answerFour").empty();
		$("#timerColumn").empty();
	}

	function correctAnswer () {
		emptyQuestionAnswers ();
		$("#timerColumn").hide();
		$("#messageColumn").html("Rawr! That was the correct answer!"  + "<br>" + questionArray[counters.currentQuestion].answerImg);
		counters.correctAnswers++;
		console.log(counters.correctAnswers);
		counters.currentQuestion++;
		console.log(counters.currentQuestion);
		printQuestion();
		$("#questionAnswerRow").hide ();
		setTimeout(function () {
			$("#questionAnswerRow").show();
			$("#messageColumn").empty();
			$("#timerColumn").show(); 
			}, 3000);
		timer = 20;
	}

	function incorrectAnswer () {
		emptyQuestionAnswers ();
		$("#timerColumn").hide();
		$("#messageColumn").html("Phlgbttt! That was incorrect! <br> The correct answer was: <br>" + questionArray[counters.currentQuestion].correctAnswer + "<br>" + questionArray[counters.currentQuestion].answerImg);
		counters.incorrectAnswers++;
		console.log(counters.incorrectAnswers);
		counters.currentQuestion++;
		console.log(counters.currentQuestion);
		printQuestion();
		$("#questionAnswerRow").hide ();
		setTimeout(function () {
			$("#questionAnswerRow").show();
			$("#messageColumn").empty();
			$("#timerColumn").show();
			}, 2000);
		timer = 20;
	}

	function timeExpired () {
		clearInterval(intervalId);
		startTimer ();
		emptyQuestionAnswers ();
		$("#timerColumn").hide();
		$("#messageColumn").html("Womp womp! The timer ran out. <br> The correct answer was: <br>" + questionArray[counters.currentQuestion].correctAnswer  + "<br>" + questionArray[counters.currentQuestion].answerImg);
		counters.timesUp++;
		console.log(counters.timesUp);
		counters.currentQuestion++;
		console.log(counters.currentQuestion);
		printQuestion();
		$("#questionAnswerRow").hide ();
		setTimeout(function () {
			$("#questionAnswerRow").show();
			$("#messageColumn").empty();
			$("#timerColumn").show();
		}, 2000);
		timer = 20;
	}


	function playGame () {

			$("#messageColumn").empty();
			console.log(questionArray[0].question);

			printQuestion ();

			startTimer ();


					$(".possibleAnswer").hover(
							function () {
							$(this).animate({"font-size": "60"}, 100)},
						function () {
							$(this).animate({"font-size": "30"}, 100)}
					);

			
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
		$("#timerColumn").hide();
		clearInterval(intervalId);
		emptyQuestionAnswers ();
		setTimeout(function () {
			$("#messageColumn").append("You answered " + counters.correctAnswers + " questions correctly! <br><br>");
			$("#messageColumn").append("You answered " + counters.incorrectAnswers + " questions incorrectly. <br><br>");
			$("#messageColumn").append("You ran out of time on " + counters.timesUp + " questions. <br><br>");
		}, 2000);

		setTimeout(function () {
			$("#timerColumn").hide();
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