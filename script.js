$(document).ready(function(){

    var magic8ball = {};
    magic8ball.listOfAnswers = [ "It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it", "yes, Most likely", "Outlook good", "Yes, Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];
    
        // Hides the answer text when the page are loading.
        $("#answer").hide();
        
    //defines the method. The question function.
    magic8ball.questionAsked = function(question) {
        
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    //creates a random number
      var randomAnswer = Math.random();
        
    //makes a random number between 0 and the number of items in your array
      var randomArrayItem = randomAnswer *  this.listOfAnswers.length;
    
        // round down the number to be a whole number
      var randomIndexItem = Math.floor(randomArrayItem);
        
    // use that number to index a random number from the answers array
      var answer =  this.listOfAnswers[randomIndexItem];
    
      $("#answer").text( answer );
        
        console.log(question);
        console.log(answer);
    };
      var clickButton = function() {
          $("#answer").hide();
          $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
          $("#8ball").effect( "shake" );
          
          setTimeout(function() {
              //wait half a second before showing the prompt.
              var question = prompt("Ask a YES/NO  Question!");
              magic8ball.questionAsked(question);
          }, 500);
          
          //answer fades in
          $("#answer").fadeIn(4000); 
              
      };
        
        $("#questionButton").click(clickButton);
        console.log("does all work");
});