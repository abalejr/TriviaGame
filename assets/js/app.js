$(document).ready(function(){
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

    function Start() {
        button.hide();
        timeAside.show();
        questionSection.show();
    }
    timeAside.hide();questionSection.hide();resultSection.hide();finishSection.hide();
    
    button.click(Start);
});
