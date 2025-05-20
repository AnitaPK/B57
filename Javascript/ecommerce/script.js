const products = [
  {
    id: 1,
    name: "Skin care",
    discription: "tbn:A Nd9 GcRSQv3-UE30ahGu M6sR6CPdedUmLtJGt5n4GA&",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQv3-UE30ahGuM6sR6CPdedUmLtJGt5n4GA&s",
    price: 5000,
    inStock: true,
    quantity: 9,
  },
    {
    id: 2,
    name: "brush",
    discription: "erty dfghj tyuio ghjk tbn:A Nd9 GcRSQv3-UE30ahGu M6sR6CPdedUmLtJGt5n4GA&",
    imageURL:
      "https://www.cosmeticsinfo.org/wp-content/uploads/2023/10/GettyImages-1161219626-scaled.jpg",
    price: 4665,
    inStock: true,
    quantity: 19,
  },
      {
    id: 3,
    name: "eye liner",
    discription: "erty dfghj tyuio ghjk tbn:A Nd9 GcRSQv3-UE30ahGu M6sR6CPdedUmLtJGt5n4GA&",
    imageURL:
      "https://m.media-amazon.com/images/I/41JaRhOS3CL.jpg",
    price: 4665,
    inStock: true,
    quantity: 19,
  },
        {
    id: 4,
    name: "Lipstick",
    discription: "erty dfghj tyuio ghjk tbn:A Nd9 GcRSQv3-UE30ahGu M6sR6CPdedUmLtJGt5n4GA&",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nLF2Cpv81PYa0gGnCPcAsjvy-7FVAJa8BQ&s",
    price: 4665,
    inStock: true,
    quantity: 19,
  },
          {
    id: 5,
    name: "Foundation",
    discription: "erty dfghj tyuio ghjk tbn:A Nd9 GcRSQv3-UE30ahGu M6sR6CPdedUmLtJGt5n4GA&",
    imageURL:
      "https://www.makeupbymario.com/cdn/shop/files/MBM_SURREALSKIN_SHADE_EXT_PACKSHOT_0.5N.jpg?v=1738819894&width=640",
    price: 4665,
    inStock: true,
    quantity: 19,
  },
];


// const pList = document.getElementById('pList')
const pList = document.querySelector('#pList')


function renderProducts(){

pList.innerHTML =
products.map((product)=>
`<div class="col col-md-6 col-lg-3"> 
<div class="card" style="width: 18rem;">
  <img src="${product.imageURL}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.discription}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
`
).join('')
}
renderProducts();

function changeTheme(){
  const btnTag = document.querySelector("#themeChangeBTN")
  if(btnTag.innerHTML == `<i class="fa-solid fa-toggle-off"></i>`){
   btnTag.innerHTML = '<i class="fa-solid fa-toggle-on"></i>'
   document.querySelector('body').style.backgroundColor = 'black';
  //  document.querySelectorAll('.card').style.backgroundColor = 'gray'
   document.querySelector('body').style.color = 'red';

  }else{
    btnTag.innerHTML =`<i class="fa-solid fa-toggle-off"></i>`
       document.querySelector('body').style.backgroundColor = 'white';
  //  document.querySelectorAll('.card').style.backgroundColor = 'gray'
   document.querySelector('body').style.color = 'black';
  }
}

document.getElementById('themeChangeBTN').addEventListener('click',changeTheme)
 

