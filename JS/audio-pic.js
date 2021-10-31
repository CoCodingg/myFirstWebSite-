const singeralbum = [
  {
    pic: "아이와 나의 바다.jpg",
    title: "아이와 나의 바다 (My Sea)",
    singer: "IU (아이유)",
    src: "1",
  },
  {
    pic: "구름.jfif",
    title: "구름 [뷰티인사이드 OST Part 1]",
    singer: "로시",
    src: "2",
  },
  {
    pic: "교통정리.jfif",
    title: "교통정리(Feat. 헤이즈)",
    singer: "기리보이",
    src: "3",
  },
  {
    pic: "첫눈에.jfif",
    title: "첫눈에",
    singer: "헤이즈 (Heize)",
    src: "4",
  },
  {
    pic: "Last Chrisxmas.jfif",
    title: "Last Chrisxmas",
    singer: "Ariana Grande",
    src: "5",
  },
  {
    pic: "블루밍.jfif",
    title: "Blueming (블루밍)",
    singer: "IU (아이유)",
    src: "6",
  },
  {
    pic: "One Last Time.jpg",
    title: "One Last Time",
    singer: "Ariana Grande",
    src: "7",
  },
  {
    pic: "queendom.jfif",
    title: "Queendom",
    singer: "Red Velvet (레드벨벳)",
    src: "8",
  },
  {
    pic: "그날.jfif",
    title: "그 날(Original Ver.)",
    singer: "박효신 (Park Hyo Shin)",
    src: "9",
  },
  {
    pic: "잊어야 한다는 마음으로.jfif",
    title: "잊어야 한다는 마음으로",
    singer: "IU (아이유)",
    src: "10",
  },
  {
    pic: "삐삐.jfif",
    title: "삐삐",
    singer: "IU (아이유)",
    src: "11",
  },
  {
    pic: "Life Goes On.jfif",
    title: "Life Goes On",
    singer: "IU (아이유)",
    src: "12",
  },
  {
    pic: "snapping.jfif",
    title: "Snapping",
    singer: "청하 (ChungHa)",
    src: "13",
  },
  {
    pic: "그대라는 시.jfif",
    title: "그대라는 시",
    singer: "태연 (TaeYeon)",
    src: "14",
  },
  {
    pic: "청하.jfif",
    title: "Why Don’t You Know",
    singer: "청하 (ChungHa)",
    src: "15",
  },
  {
    pic: "고백.jpg",
    title: "고백",
    singer: "멜로망스",
    src: "16",
  },
  {
    pic: "weekend.jpg",
    title: "Weekend",
    singer: "태연 (TaeYeon)",
    src: "17",
  },
];

const audioContainer = document.querySelector("#audio-container");
const audioSrc = document.querySelector("#audio-src");
const audioSingTitle = document.querySelector(".audio-sing__title");
const audioSingName = document.querySelector(".audio-sing__name");
const audioPlayBtn = document.querySelector(".audio-play");
const audioStopBtn = document.querySelector(".audio-stop");
const audioNextBtn = document.querySelector(".audio-next");
const audioAlbumPic = document.querySelector(".audio-albumpic");

const MUSIC_COUNT = 8;
const currentAudio = 1;

audioPlayBtn.addEventListener("click", playAudio);
audioStopBtn.addEventListener("click", stopAudio);
audioNextBtn.addEventListener("click", nextAudio);

audioSrc.src = `music/2.mp3`;
audioContainer.load();
audioSingTitle.innerText = "구름 [뷰티인사이드 OST Part 1]";
audioSingName.innerText = "로시";
audioAlbumPic.src = "albumpic/구름.jfif";

function playAudio() {
  audioContainer.volume = 0.2;
  audioContainer.loop = true;
  audioContainer.play();
}

function stopAudio() {
  audioContainer.pause();
}

function nextAudio() {
  const chosenalbum =
    singeralbum[Math.floor(Math.random() * singeralbum.length)];
  audioSrc.src = `music/${chosenalbum.src}.mp3`;
  audioContainer.load();
  audioSingTitle.innerText = chosenalbum.title;
  audioSingName.innerText = chosenalbum.singer;
  audioAlbumPic.src = `albumpic/${chosenalbum.pic}`;
  playAudio();
}
