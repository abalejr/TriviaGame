$(document).ready(function(){
    var questions = [
        {query: "Everyone remembers the world was supposed to end on December \
            21st 2012, but thee was another 21st in 2011 that theorists believed \
            would be the end of days. What month was it?",
            a: "April", b: "May", c: "June", d: "July",
            answer: "May", img: "../img/may-21.jpg"},
        {query: "Everyone remembers the world was supposed to end on December \
            21st 2012, but thee was another 21st in 2011 that theorists believed \
            would be the end of days. What month was it?",
            a: "April", b: "May", c: "June", d: "July",
            answer: "May", img: "../img/may-21.jpg"},
        {query: "Everyone remembers the world was supposed to end on December \
            21st 2012, but thee was another 21st in 2011 that theorists believed \
            would be the end of days. What month was it?",
            a: "April", b: "May", c: "June", d: "July",
            answer: "May", img: "../img/may-21.jpg"},
        {query: "Everyone remembers the world was supposed to end on December \
            21st 2012, but thee was another 21st in 2011 that theorists believed \
            would be the end of days. What month was it?",
            a: "April", b: "May", c: "June", d: "July",
            answer: "May", img: "../img/may-21.jpg"},
        {query: "Everyone remembers the world was supposed to end on December \
            21st 2012, but thee was another 21st in 2011 that theorists believed \
            would be the end of days. What month was it?",
            a: "April", b: "May", c: "June", d: "July",
            answer: "May", img: "../img/may-21.jpg"},
        {query: "Everyone remembers the world was supposed to end on December \
            21st 2012, but thee was another 21st in 2011 that theorists believed \
            would be the end of days. What month was it?",
            a: "April", b: "May", c: "June", d: "July",
            answer: "May", img: "../img/may-21.jpg"},
        {query: "Everyone remembers the world was supposed to end on December \
            21st 2012, but thee was another 21st in 2011 that theorists believed \
            would be the end of days. What month was it?",
            a: "April", b: "May", c: "June", d: "July",
            answer: "May", img: "../img/may-21.jpg"},
        {query: "Everyone remembers the world was supposed to end on December \
            21st 2012, but thee was another 21st in 2011 that theorists believed \
            would be the end of days. What month was it?",
            a: "April", b: "May", c: "June", d: "July",
            answer: "May", img: "../img/may-21.jpg"}
    ]
    var button = $("button");

    var timeAside = $("#time");
    var $time = timeAside.find("b");

    var questionSection = $("#question");
    var $question = questionSection.children("h2");
    var $answers = questionSection.find("li");
    var $a = $("#a");
    var $b = $("#b");
    var $c = $("#c");
    var $d = $("#d");

    var resultSection = $("#result");
    var $result = resultSection.children("h3");
    var $correction = resultSection.find("b");
    var $resultImg = resultSection.find("img");

    var finishSection = $("#finish");
    var $correct = $("#correct").children("b");
    var $incorrect = $("#incorrect").children("b");
    var $unanswered = $("#unanswered").children("b");

    function populateQuestion() {

    }

    function start() {
        button.hide();
        timeAside.show();
        questionSection.show();
    }
    timeAside.hide();questionSection.hide();resultSection.hide();finishSection.hide();
    
    button.click(start);
});
