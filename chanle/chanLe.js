function myFunction() {
    let x = document.getElementById('x').value;
    let value = x % 2;
    switch (value){
        case 0:{
            document.getElementById('kq').value = "Đây là số chẵn.";
            break;
        }
        default:{
            document.getElementById('kq').value= "Đây là số lẻ.";
        }
    }
}