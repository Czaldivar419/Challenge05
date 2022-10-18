var saveBtn = $(".saveBtn");


$("#currentDay").text(moment().format('dddd MMMM D, YYYY'));

function blockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("past");
        }
        })
};

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var notes = $(this).siblings(".notes").val();

   localStorage.setItem(time, notes);

});

function run() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentNotes = localStorage.getItem(currentHour);
        

        if (currentNotes !== null) {
            $(this).siblings(".notes").val(currentNotes);
        }
    });
}

blockColor();
run();