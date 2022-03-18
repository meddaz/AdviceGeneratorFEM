var url = "https://api.adviceslip.com/advice";

$.getJSON(url, function(data) {


    adviceID.innerHTML = `${data.slip.id}`;
    adviceText.innerHTML = `"${data.slip.advice}"`;
})