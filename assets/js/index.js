// Variables
var currentDay = $("#currentDay");
var timeblocksEl = $("#timeblocks")
var rowEl = $(".row")
var hourEl = $(".hour")
var descriptionEl = $(".description")
var saveEl = $(".saveBtn")

// DayJs for current day
var now = dayjs().format("dddd, MMMM D - YYYY");
currentDay.text(now);

// Timeblocks

let timeblocks = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
]

function createTimeblock() {
    for (var i = 0; i < timeblocks.length; i++) {
        var side = timeblocks[i]

        var row = $("<div>").addClass("row")
        timeblocksEl.append(row)

        var hour = $("<div>").addClass("hour block")
        hour.html(side)
        row.append(hour)

        var text = $("<textarea>").addClass("description block").attr('id', i);
        row.append(text)

        var save = $("<button>").addClass("saveBtn block").attr("value", i)
        save.text("Save")
        row.append(save)



    }

}

createTimeblock();
