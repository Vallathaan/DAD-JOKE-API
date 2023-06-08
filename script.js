var API= "https://api.imgflip.com/get_memes"
fetch(API)
.then((response) => response.json())
.then((data) =>{

var oltag = document.getElementById("carousel-indicators")  ; 
var carouselinner = document.getElementById("carousel-inner");
for(i=0;i<data.data.memes.length;i++){

  


oltag.innerHTML +=
  `<li data-target="#carouselExampleCaptions" data-slide-to="${i}" ></li>`;

carouselinner.innerHTML +=
   ` 
  <div class="carousel-item ">
    <img src="${data.data.memes[i].url}" class="d-block w-100" alt="${data.data.memes[i].name}'meme">
    <div class="carousel-caption d-none d-md-block">
      <h1 class="innerline">${data.data.memes[i].name}</h1>
    </div>
  </div>
  `
  
}

    
})

 