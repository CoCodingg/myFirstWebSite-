const image = [
   "background/풍경1.jpg",
   "background/풍경2.jfif",
   "background/풍경3.png",
   "background/풍경4.jfif",
   "background/풍경5.jfif",
   "background/풍경6.jfif",
   "background/풍경7.png",
   "background/풍경8.jfif",
];

const button = document.querySelector(".background-button");

button.addEventListener("click", changeBackGround);

function changeBackGround(){
  const backback = document.querySelector(".backback");
  const backimg = image[Math.floor(Math.random() * image.length)];
  backback.src = `${backimg}`;
}