let women = [
    {
        id: 1,
        name: "Váy hoa nhí",
        code: "VNW0001",
        price: "150.000",
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-lomz620qk5ivab"
    }
    ,
    {
        id: 2,
        name: "Áo khoác Blazer",
        code: "VNW0002",
        price: "250.000",
        image: "https://salt.tikicdn.com/cache/w1200/ts/product/cf/e2/ff/74850b85f97eedfc9e04f5ccde068bc2.jpg"
    }
    ,
    {
        id: 3,
        name: "Áo cổ lọ",
        code: "VNW0003",
        price: "300.000",
        image: "https://daycatmay.edu.vn/wp-content/uploads/2023/06/Ky-thuat-bau-lo.jpg"
    }
];

let men = [
    {
        id: 1,
        name: "Quần sort đen",
        code: "VNM0001",
        price: "150.000",
        image: "https://salt.tikicdn.com/ts/product/cc/42/02/8e4d080361efc03209d4c3f04d77c703.jpg"
    }
    ,
    {
        id: 2,
        name: "Quần baggy",
        code: "VNM0002",
        price: "250.000",
        image: "https://hidanz.com/wp-content/uploads/2021/05/phoi-quan-baggy-9.jpg"
    }
    ,
    {
        id: 3,
        name: "Áo sơ mi trắng",
        code: "VNM0003",
        price: "300.000",
        image: "https://aristino.com/Data/upload/images/Product/so-mi-dai-tay/ALS03502/ao-so-mi-nam-aristino-ALS03502-05.jpg"
    }
    ,
    {
        id: 4,
        name: "Áo phông",
        code: "VNM0004",
        price: "220.000",
        image: "https://media.loveitopcdn.com/26137/ao-thun-nam-mau-trang-in-chu-fun-atn4135.jpg"
    }
];

function listProduct() {
    for (let i = 0; i< women.length; i++){
        var output = '<div class="card col-4">';
        output += '<img src="'+women[i].image+'" class="card-img-top" alt="...">';
        output += '<div class="card-body">';
        output += '<h5 class="card-title">'+women[i].name+' - '+women[i].code+'</h5>';
        output += '<p class="card-text">'+women[i].price+'</p>';
        output += '<a href="#" class="btn btn-primary">Đặt mua</a>';        
        output += '</div>'  ;    
        output += '</div>'  ; 
        console.log(output);
        document.getElementById('women').innerHTML += output; 
    }
    for (let i = 0; i< men.length; i++){
        var output = '<div class="card col-3">';
        output += '<img src="'+men[i].image+'" class="card-img-top" alt="...">';
        output += '<div class="card-body">';
        output += '<h5 class="card-title">'+men[i].name+' - '+men[i].code+'</h5>';
        output += '<p class="card-text">'+men[i].price+'</p>';
        output += '<a href="#" class="btn btn-primary">Đặt mua</a>';        
        output += '</div>'  ;    
        output += '</div>'  ; 
        console.log(output);
        document.getElementById('men').innerHTML += output; 
    }
}