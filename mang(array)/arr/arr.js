let arr = []

function save(){
    let newArr = {
        name: document.getElementById('fn-c').value,
        id: document.getElementById('id-p').value,
        name_P: document.getElementById('n-p').value,
        qty: document.getElementById('q-p').value,
        price: document.getElementById('p-p').value
    }
    console.log(arr)
    arr.push(newArr)
}

function show(){
    let html = '';
    for (i in arr) {
        let n = i
        n++;
        html+= '<tr>';
        html+= '<td>'+n+'</td>'
        html+= '<td>'+arr[i].name+'</td>'
        html+= '<td>'+arr[i].id+'</td>'
        html+= '<td>'+arr[i].name_P+'</td>'
        html+= '<td>'+arr[i].qty+'</td>'
        html+= '<td>'+arr[i].price+'</td>'
        html+= '<td>'+(arr[i].qty * arr[i].price)+'</td>'
        html+= '</tr>'
    }
    document.getElementById('tbl').innerHTML = html;
}

function reset(){
    document.getElementById('fn-c').value = ''
    document.getElementById('id-p').value = ''
    document.getElementById('n-p').value = ''
    document.getElementById('q-p').value = ''
    document.getElementById('p-p').value = ''
}