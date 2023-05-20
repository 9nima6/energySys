// carousel 1
const pic1 = document.querySelector(".pic1");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const forth = document.querySelector(".forth");
const fifth = document.querySelector(".fifth");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");
const width = document.documentElement.clientWidth - 71;
let activeImage = 0;

left.addEventListener("click", function () {
  activeImage--;
  if (activeImage == -1) {
    activeImage = 4;
  }
  pic1.style.marginLeft = `${-width * activeImage}px`;
});
right.addEventListener("click", function () {
  activeImage++;
  if (activeImage == 5) {
    activeImage = 0;
  }
  pic1.style.marginLeft = `${-width * activeImage}px`;
});

first.addEventListener("click", function () {
  activeImage = 0;
  pic1.style.marginLeft = `${-width * activeImage}px`;
});
second.addEventListener("click", function () {
  activeImage = 1;
  pic1.style.marginLeft = `${-width * activeImage}px`;
});
third.addEventListener("click", function () {
  activeImage = 2;
  pic1.style.marginLeft = `${-width * activeImage}px`;
});
forth.addEventListener("click", function () {
  activeImage = 3;
  pic1.style.marginLeft = `${-width * activeImage}px`;
});
fifth.addEventListener("click", function () {
  activeImage = 4;
  pic1.style.marginLeft = `${-width * activeImage}px`;
});

let nima;
function auto() {
  pic1.style.marginLeft = `${-width * activeImage}px`;
  activeImage++;
  if (activeImage == 5) {
    activeImage = 0;
  }
}
nima = setInterval(auto, 3000);
pause.addEventListener("click", function () {
  clearInterval(nima);
  pause.classList.toggle("hidden");
  play.classList.toggle("hidden");
  activeImage--;
});
play.addEventListener("click", function () {
  nima = setInterval(auto, 3000);
  pause.classList.toggle("hidden");
  play.classList.toggle("hidden");
  activeImage--;
});
// carousel 2
const pic1_2 = document.querySelector(".pic1_2");
const left2 = document.querySelector(".left2");
const right2 = document.querySelector(".right2");
const first2 = document.querySelector(".first2");
const second2 = document.querySelector(".second2");
const third2 = document.querySelector(".third2");
const forth2 = document.querySelector(".forth2");
const fifth2 = document.querySelector(".fifth2");
const pause2 = document.querySelector(".pause2");
const play2 = document.querySelector(".play2");
const width2 = document.documentElement.clientWidth - 71;
let activeImage2 = 0;

left2.addEventListener("click", function () {
  activeImage2--;
  if (activeImage2 == -1) {
    activeImage2 = 4;
  }
  pic1_2.style.marginLeft = `${-width2 * activeImage2}px`;
});
right2.addEventListener("click", function () {
  activeImage2++;
  if (activeImage2 == 5) {
    activeImage2 = 0;
  }
  pic1_2.style.marginLeft = `${-width2 * activeImage2}px`;
});

first2.addEventListener("click", function () {
  activeImage2 = 0;
  pic1_2.style.marginLeft = `${-width2 * activeImage2}px`;
});
second2.addEventListener("click", function () {
  activeImage2 = 1;
  pic1_2.style.marginLeft = `${-width2 * activeImage2}px`;
});
third2.addEventListener("click", function () {
  activeImage2 = 2;
  pic1_2.style.marginLeft = `${-width2 * activeImage2}px`;
});
forth2.addEventListener("click", function () {
  activeImage2 = 3;
  pic1_2.style.marginLeft = `${-width2 * activeImage2}px`;
});
fifth2.addEventListener("click", function () {
  activeImage2 = 4;
  pic1_2.style.marginLeft = `${-width2 * activeImage2}px`;
});

let nima2;
function auto2() {
  pic1_2.style.marginLeft = `${-width2 * activeImage2}px`;
  activeImage2++;
  if (activeImage2 == 5) {
    activeImage2 = 0;
  }
}
nima2 = setInterval(auto2, 3000);
pause2.addEventListener("click", function () {
  clearInterval(nima2);
  pause2.classList.toggle("hidden");
  play2.classList.toggle("hidden");
  activeImage2--;
});
play2.addEventListener("click", function () {
  nima2 = setInterval(auto2, 3000);
  pause2.classList.toggle("hidden");
  play2.classList.toggle("hidden");
  activeImage2--;
});
// carousel 3
const pic1_3 = document.querySelector(".pic1_3");
const left3 = document.querySelector(".left3");
const right3 = document.querySelector(".right3");
const first3 = document.querySelector(".first3");
const second3 = document.querySelector(".second3");
const third3 = document.querySelector(".third3");
const forth3 = document.querySelector(".forth3");
const fifth3 = document.querySelector(".fifth3");
const pause3 = document.querySelector(".pause3");
const play3 = document.querySelector(".play3");
const width3 = document.documentElement.clientWidth - 71;
let activeImage3 = 0;

left3.addEventListener("click", function () {
  activeImage3--;
  if (activeImage3 == -1) {
    activeImage3 = 4;
  }
  pic1_3.style.marginLeft = `${-width3 * activeImage3}px`;
});
right3.addEventListener("click", function () {
  activeImage3++;
  if (activeImage3 == 5) {
    activeImage3 = 0;
  }
  pic1_3.style.marginLeft = `${-width3 * activeImage3}px`;
});

first3.addEventListener("click", function () {
  activeImage3 = 0;
  pic1_3.style.marginLeft = `${-width3 * activeImage3}px`;
});
second3.addEventListener("click", function () {
  activeImage3 = 1;
  pic1_3.style.marginLeft = `${-width3 * activeImage3}px`;
});
third3.addEventListener("click", function () {
  activeImage3 = 2;
  pic1_3.style.marginLeft = `${-width3 * activeImage3}px`;
});
forth3.addEventListener("click", function () {
  activeImage3 = 3;
  pic1_3.style.marginLeft = `${-width3 * activeImage3}px`;
});
fifth3.addEventListener("click", function () {
  activeImage3 = 4;
  pic1_3.style.marginLeft = `${-width3 * activeImage3}px`;
});

let nima3;
function auto3() {
  pic1_3.style.marginLeft = `${-width3 * activeImage3}px`;
  activeImage3++;
  if (activeImage3 == 5) {
    activeImage3 = 0;
  }
}
nima3 = setInterval(auto3, 3000);
pause3.addEventListener("click", function () {
  clearInterval(nima3);
  pause3.classList.toggle("hidden");
  play3.classList.toggle("hidden");
  activeImage3--;
});
play3.addEventListener("click", function () {
  nima3 = setInterval(auto3, 3000);
  pause3.classList.toggle("hidden");
  play3.classList.toggle("hidden");
  activeImage3--;
});
// carousel 4
const pic1_4 = document.querySelector(".pic1_4");
const left4 = document.querySelector(".left4");
const right4 = document.querySelector(".right4");
const first4 = document.querySelector(".first4");
const second4 = document.querySelector(".second4");
const third4 = document.querySelector(".third4");
const forth4 = document.querySelector(".forth4");
const fifth4 = document.querySelector(".fifth4");
const sixth4 = document.querySelector(".sixth4");
const seventh4 = document.querySelector(".seventh4");
const eighth4 = document.querySelector(".eighth4");
const nineth4 = document.querySelector(".nineth4");
const tenth4 = document.querySelector(".tenth4");
const pause4 = document.querySelector(".pause4");
const play4 = document.querySelector(".play4");
const width4 = document.documentElement.clientWidth - 71;
let activeImage4 = 0;

left4.addEventListener("click", function () {
  activeImage4--;
  if (activeImage4 == -1) {
    activeImage4 = 9;
  }
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
right4.addEventListener("click", function () {
  activeImage4++;
  if (activeImage4 == 10) {
    activeImage4 = 0;
  }
  pic1_4.style.marginLeft = `${-width34 * activeImage4}px`;
});

first4.addEventListener("click", function () {
  activeImage4 = 0;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
second4.addEventListener("click", function () {
  activeImage4 = 1;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
third4.addEventListener("click", function () {
  activeImage4 = 2;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
forth4.addEventListener("click", function () {
  activeImage4 = 3;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
fifth4.addEventListener("click", function () {
  activeImage4 = 4;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
sixth4.addEventListener("click", function () {
  activeImage4 = 5;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
seventh4.addEventListener("click", function () {
  activeImage4 = 6;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
eighth4.addEventListener("click", function () {
  activeImage4 = 7;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
nineth4.addEventListener("click", function () {
  activeImage4 = 8;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});
tenth4.addEventListener("click", function () {
  activeImage4 = 9;
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
});

let nima4;
function auto4() {
  pic1_4.style.marginLeft = `${-width4 * activeImage4}px`;
  activeImage4++;
  if (activeImage4 == 10) {
    activeImage4 = 0;
  }
}
nima4 = setInterval(auto4, 3000);
pause4.addEventListener("click", function () {
  clearInterval(nima4);
  pause4.classList.toggle("hidden");
  play4.classList.toggle("hidden");
  activeImage4--;
});
play4.addEventListener("click", function () {
  nima4 = setInterval(auto4, 3000);
  pause4.classList.toggle("hidden");
  play4.classList.toggle("hidden");
  activeImage4--;
});
