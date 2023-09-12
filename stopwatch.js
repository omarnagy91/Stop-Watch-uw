let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let minute = document.querySelector(".minute");
let scend = document.querySelector(".scend");
let ms = document.querySelector(".ms");
let startMinute = 0;
let startScend = 0;
let startMs = 0;
let int;
start.onclick = () => {
  int = setInterval(getStart, 10);
};
stop.onclick = function () {
  clearInterval(int);
};
reset.onclick = () => {
  startMinute = 0;
  startScend = 0;
  startMs = 0;
  minute.innerHTML = "00";
  scend.innerHTML = "00";
  ms.innerHTML = "00";
};

function getStart() {
  startMs++;
  if (startMs <= 9) {
    ms.innerHTML = "0" + startMs;
  }
  if (startMs > 9) {
    ms.innerHTML = startMs;
  }
  if (startMs > 99) {
    startScend++;
    startMs = "00";
    scend.innerHTML = "0" + startScend;
    ms.innerHTML = "0" + 0;
  }
  if (startScend > 9) {
    scend.innerHTML = startScend;
  }
  if (startScend > 59) {
    startMinute++;
    startMs = "00";
    startScend = "00";
    minute.innerHTML = "0" + startMinute;
    ms.innerHTML = "0" + 0;
    scend.innerHTML = "0" + 0;
  }
}
