function myFunction() {
    let who = document.getElementById('who').value;
    let sw = document.getElementById('swimming');
    let isSw = sw.checked;
    let fb = document.getElementById('footbal');
    let isFb = fb.checked;
    let dc = document.getElementById('dancing');
    let isDc = dc.checked;
    let sg = document.getElementById('singing');
    let isSg = sg.checked;
    let fee = 0;
    let output = "";
    let br = "<br>";
    if (isSw) {
        fee += 500000;
        output += "Học phí câu lạc bộ Swimming là 500000VND" + br;
    }
    if (isFb) {
        fee += 600000;
        output += "Học phí câu lạc bộ Footbal là 600000VND" + br;
    }
    if (isDc) {
        fee += 200000;
        output += "Học phí câu lạc bộ Dancing là 200000VND" + br;
    }
    if (isSg) {
        fee += 1000000;
        output += "Học phí câu lạc bộ Singing là 1000000VND" + br;
    }

    if(who == "hightStudent"){
        fee = fee - fee*0.1;
    }else if(who == "student"){
        fee = fee - fee*0.3;
    }else{
        fee = fee - fee*0.03;
    }
    fee = parseFloat(fee);
    document.getElementById('result').innerHTML = output + "Tổng học phí của bạn là: " + fee + "VND";
}