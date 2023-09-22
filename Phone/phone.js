function Add() {
    let name = document.getElementById('name').value;
    let img = document.getElementById('file').value;
    let price = document.getElementById('price').value;

    let image = img.slice(11);
    let html = `
        <div class="card col-md-5 mt-2 ms-5 mb-3">
            <img src="${image}" alt="Card image cap" style="height: 250px;" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text" id="price">${price}đ</p>
                <a href="#" class="btn btn-success">Đặt mua</a>
            </div>
        </div>
    `;
    let app = document.querySelector('.row')
    app.innerHTML += html;
    console.log(img);
}