function myFunction(){
    var drinks = document.getElementById('soft-drinks');
    var value_d = drinks.options[drinks.selectedIndex].value;
    var fruits = document.getElementById('fruits');
    var value_f = fruits.options[fruits.selectedIndex].value;
    var money_client = document.getElementById('money-client').value;
    money_client = parseFloat(money_client);
    var sum;
    var output_sum;
    var output_d = "Bạn đã chọn loại nước ";
    var output_f = "loại trái cây: ";
    if (value_d=="water") {
        sum = money_client - 15000;
        output_d += "15000VND, ";
    } else if (value_d == "redbull"){
        sum = money_client - 20000;
        output_d += "20000VND, ";
    }else{
        sum = money_client - 17000;
        output_d += "17000VND, ";
    }
    sum = parseFloat(sum);
    if (value_f=="small-fruits") {
        sum -= 99000;
        output_f += "nhỏ";
    } else if(value_f == "big-fruits"){
        sum -= 129000;
        output_f += "lớn";
    }else{
        sum -= 189000;
        output_f += "bưởi";
    }
    sum = parseFloat(sum);
    if (sum > 0) {
        output_sum = ". Tiền thừa của bạn là " + sum;
    } else {
        output_sum = ". Số tiền không đủ, bạn thiếu " + sum;
    }
    document.getElementById('output').innerHTML = output_d + output_f + output_sum +"VND";
}