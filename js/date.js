exports.formatDate = function (dateVal) {
    var newDate = new Date(dateVal);

	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	var sMonth = monthNames[(newDate.getMonth())];
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
	var sSecond = padValue(newDate.getSeconds());
    var sAMPM = "AM";

    var iHourCheck = parseInt(sHour);

    if (iHourCheck > 12) {
        sAMPM = "PM";
        sHour = iHourCheck - 12;
    }
	else if (iHourCheck === 0) {
        sHour = "12";
    }
    else if (iHourCheck === 12) {
        sAMPM = "PM";
    }

    sHour = padValue(sHour);

    return sMonth + " " + sDay + ", " + sYear + " " + sHour + ":" + sMinute + ":" + sSecond + " " + sAMPM;
}

function padValue(value) {
    return (value < 10) ? "0" + value : value;
}

