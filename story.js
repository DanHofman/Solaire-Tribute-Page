var sectionTracker = 0;
var started = false;
var story = [];
var sections = [];
$.getJSON("SolaireStory.json", function (data) {
    for(var index = 0; index < data.length; index++){
        story.push(data[index]);
    }
    for(var i =0; i < story.length;i++){
        sections.push(Object.keys(story[i]));
    }
});

var nextId = "#Next" + sectionTracker;
$(document).ready( function gather() {
    $("#StartingButton").click(function() {
        var next = "<li id='nextstory" + sectionTracker + "' style='display: none;'>" + story[sectionTracker][sections[sectionTracker]] + "</li><button class='storybutton' id='Next" + sectionTracker + "'>" + (sections[sectionTracker + 1]) + "</button>";
        if(started == false) {
            $("#Solaires-tale").append(next);
            $("#nextstory" + sectionTracker).show('slow');
            $("#nextstory" + sectionTracker).animate({color: "black"}, 1000);
            started = true;
            $("#StartingButton").remove();
            sectionTracker += 1;
            gather();
        }
    });
    $(nextId).on("click", function() {

        if(sectionTracker == sections.length - 1)
        {
            var next = "<li id='nextstory" + sectionTracker + "' style='display: none;'>" + story[sectionTracker][sections[sectionTracker]] + "</li>";
            $("#Solaires-tale").append(next);
            $("#nextstory" + sectionTracker).show('slow');
            $("#nextstory" + sectionTracker).animate({color: "black"}, 1000);
            sectionTracker += 1;
            $(nextId).remove();
        }
        else {
            var next = "<li id='nextstory" + sectionTracker + "' style='display: none;'>" + story[sectionTracker][sections[sectionTracker]] + "</li><button class='storybutton' id='Next" + sectionTracker + "'>" + (sections[sectionTracker + 1]) + "</button>";
            $("#Solaires-tale").append(next);
            $("#nextstory" + sectionTracker).show('slow');
            $("#nextstory" + sectionTracker).animate({color: "black"}, 1000);
            $(nextId).remove();
            sectionTracker += 1;
            nextId = "#Next" + (sectionTracker - 1);
            gather();
        }
    });
});