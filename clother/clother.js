let id = 0;
function myFunction1() {
    id++;
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;

    let sub = quantity*price;
    let row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + sub + "</td>";
    document.getElementById("tbl").innerHTML += row;
}