// Variables
var currentDay = $("#currentDay");
var timeblocksEl = $("#timeblocks");

// DayJs for the current day
var now = dayjs().format("dddd, MMMM D - YYYY");
currentDay.text(now);

// Timeblocks
let timeblocks = [
    "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"
];

function createTimeblock() {
    for (var i = 0; i < timeblocks.length; i++) {
        var side = timeblocks[i];

        var row = $("<div>").addClass("row");
        timeblocksEl.append(row);

        var hour = $("<div>").addClass("hour block");
        hour.html(side);
        row.append(hour);

        var text = $("<textarea>").addClass("description block").attr('id', i);
        row.append(text);

        var save = $("<button>").addClass("saveBtn block").attr("value", i);
        save.text("Save");
        row.append(save);
    }
}

createTimeblock();

// Coloured timeblocks
function colouredTimeblocks() {
    var GetCurrentHR = dayjs().format('h a');
    var CurrentHour = dayjs(GetCurrentHR, 'h a');
    var Descriptions = $('.description'); // Using jQuery to select elements
    
    Descriptions.each(function (i) {
        var TimeBlock = dayjs(timeblocks[i], 'h a');
        if (CurrentHour.isSame(TimeBlock)) {
            $(this).addClass('present').removeClass('future past');
        } else if (CurrentHour.isBefore(TimeBlock)) {
            $(this).addClass('future').removeClass('past present');
        } else if (CurrentHour.isBefore(TimeBlock) === false) {
            $(this).addClass('past').removeClass('future present');
        }
    });
}

$(document).ready(function () {
    colouredTimeblocks();
    setInterval(colouredTimeblocks, 10000);
});


// Save function
$(document).on('click', '.saveBtn', function (event) {
    event.preventDefault();
    var SaveBtnValue = $(this).val();
    var desctiption = document.getElementById(SaveBtnValue).value;
    localStorage.setItem(SaveBtnValue, desctiption);
});

// Get stored notes
function storedNotes() {
    for (var i = 0; i < timeblocks.length; i++) {
        var getStoredNotes = localStorage.getItem(i);
        var text = document.getElementById(i);
        if (getStoredNotes !== null) {
            text.append(getStoredNotes);
        }
    }
}

storedNotes();
