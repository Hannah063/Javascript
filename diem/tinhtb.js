function myFunction() {
    var s1 = document.getElementById('s1').value;
    s1 = parseInt(s1);
    var s2 = document.getElementById('s2').value;
    s2 = parseInt(s2);
    var year = document.getElementById('selectYear');
    var valueYear = year.options[year.selectedIndex].value;
    valueYear = parseInt(valueYear);
    var average;
    switch (valueYear){
        case 1:{
            average = (s1 + ( s2 * 2)) / 3;
            average = parseFloat(average);
            document.getElementById('result').value = average;
        }
        case 2:{
            average = ((s1 * 2) + (s2 * 3)) / 5;
            average = parseFloat(average);
            document.getElementById('result').value = average;
        }
        case 3:{
            average = ((s1 * 3) + (s2 * 4)) / 7;
            average = parseFloat(average);
            document.getElementById('result').value = average;
        }
    }

    if (average>=9) {
        document.getElementById('output').innerHTML = "Học sinh Giỏi";
        document.getElementById('output').style.color = "green";
    } else if (average<9 && average>=7) {
        document.getElementById('output').innerHTML = "Học sinh Khá";
        document.getElementById('output').style.color = "yellow";
    } else if (average<7 && average>=5) {
        document.getElementById('output').innerHTML = "Học sinh Trung bình";
        document.getElementById('output').style.color = "orange";
    } else{
        document.getElementById('output').innerHTML = "Học sinh Yếu" + s1;
        document.getElementById('output').style.color = "red";
    }
}

function myFunction1(){
    document.getElementById('s1').value = "";
    document.getElementById('s2').value = "";
}