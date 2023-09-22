let id = 0;
function myFunction1() {
    id++;
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let discount = document.getElementById('discount').value;

    let sub = quantity*price*(1-discount/100);
    let row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + discount + "</td>";
    row += "<td>" + sub + "</td>";
    document.getElementById("tbl").innerHTML += row;
}
function myFunction2() {
    document.getElementById('name').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('price').value = "";
    document.getElementById('discount').value = "";
}