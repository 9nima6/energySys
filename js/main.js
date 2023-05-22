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
  pic1_4.style.marginLeft = `${-widt64 * activeImage4}px`;
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
// carousel 5
const pic1_5 = document.querySelector(".pic1_5");
const left5 = document.querySelector(".left5");
const right5 = document.querySelector(".right5");
const first5 = document.querySelector(".first5");
const second5 = document.querySelector(".second5");
const third5 = document.querySelector(".third5");
const forth5 = document.querySelector(".forth5");
const fifth5 = document.querySelector(".fifth5");
const pause5 = document.querySelector(".pause5");
const play5 = document.querySelector(".play5");
const width5 = document.documentElement.clientWidth - 71;
let activeImage5 = 0;

left5.addEventListener("click", function () {
  activeImage5--;
  if (activeImage5 == -1) {
    activeImage5 = 4;
  }
  pic1_5.style.marginLeft = `${-width5 * activeImage5}px`;
});
right5.addEventListener("click", function () {
  activeImage5++;
  if (activeImage5 == 5) {
    activeImage5 = 0;
  }
  pic1_5.style.marginLeft = `${-width5 * activeImage5}px`;
});

first5.addEventListener("click", function () {
  activeImage5 = 0;
  pic1_5.style.marginLeft = `${-width5 * activeImage5}px`;
});
second5.addEventListener("click", function () {
  activeImage5 = 1;
  pic1_5.style.marginLeft = `${-width5 * activeImage5}px`;
});
third5.addEventListener("click", function () {
  activeImage5 = 2;
  pic1_5.style.marginLeft = `${-width5 * activeImage5}px`;
});
forth5.addEventListener("click", function () {
  activeImage5 = 3;
  pic1_5.style.marginLeft = `${-width5 * activeImage5}px`;
});
fifth5.addEventListener("click", function () {
  activeImage5 = 4;
  pic1_5.style.marginLeft = `${-width5 * activeImage5}px`;
});

let nima5;
function auto5() {
  pic1_5.style.marginLeft = `${-width5 * activeImage5}px`;
  activeImage5++;
  if (activeImage5 == 5) {
    activeImage5 = 0;
  }
}
nima5 = setInterval(auto5, 3000);
pause5.addEventListener("click", function () {
  clearInterval(nima5);
  pause5.classList.toggle("hidden");
  play5.classList.toggle("hidden");
  activeImage5--;
});
play5.addEventListener("click", function () {
  nima5 = setInterval(auto5, 3000);
  pause5.classList.toggle("hidden");
  play5.classList.toggle("hidden");
  activeImage5--;
});
// carousel 6
const pic1_6 = document.querySelector(".pic1_6");
const left6 = document.querySelector(".left6");
const right6 = document.querySelector(".right6");
const first6 = document.querySelector(".first6");
const second6 = document.querySelector(".second6");
const third6 = document.querySelector(".third6");
const forth6 = document.querySelector(".forth6");
const fifth6 = document.querySelector(".fifth6");
const sixth6 = document.querySelector(".sixth6");
const seventh6 = document.querySelector(".seventh6");
const eighth6 = document.querySelector(".eighth6");
const nineth6 = document.querySelector(".nineth6");
const tenth6 = document.querySelector(".tenth6");
const pause6 = document.querySelector(".pause6");
const play6 = document.querySelector(".play6");
const width6 = document.documentElement.clientWidth - 71;
let activeImage6 = 0;

left6.addEventListener("click", function () {
  activeImage6--;
  if (activeImage6 == -1) {
    activeImage6 = 9;
  }
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
right6.addEventListener("click", function () {
  activeImage6++;
  if (activeImage6 == 10) {
    activeImage6 = 0;
  }
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});

first6.addEventListener("click", function () {
  activeImage6 = 0;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
second6.addEventListener("click", function () {
  activeImage6 = 1;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
third6.addEventListener("click", function () {
  activeImage6 = 2;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
forth6.addEventListener("click", function () {
  activeImage6 = 3;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
fifth6.addEventListener("click", function () {
  activeImage6 = 4;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
sixth6.addEventListener("click", function () {
  activeImage6 = 5;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
seventh4.addEventListener("click", function () {
  activeImage6 = 6;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
eighth6.addEventListener("click", function () {
  activeImage6 = 7;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
nineth6.addEventListener("click", function () {
  activeImage6 = 8;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});
tenth6.addEventListener("click", function () {
  activeImage6 = 9;
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
});

let nima6;
function auto6() {
  pic1_6.style.marginLeft = `${-width6 * activeImage6}px`;
  activeImage6++;
  if (activeImage6 == 10) {
    activeImage6 = 0;
  }
}
nima6 = setInterval(auto6, 3000);
pause6.addEventListener("click", function () {
  clearInterval(nima6);
  pause6.classList.toggle("hidden");
  play6.classList.toggle("hidden");
  activeImage6--;
});
play6.addEventListener("click", function () {
  nima6 = setInterval(auto6, 3000);
  pause6.classList.toggle("hidden");
  play6.classList.toggle("hidden");
  activeImage6--;
});
// carousel 8
const pic1_8 = document.querySelector(".pic1_8");
const left8 = document.querySelector(".left8");
const right8 = document.querySelector(".right8");
const first8 = document.querySelector(".first8");
const second8 = document.querySelector(".second8");
const third8 = document.querySelector(".third8");
const forth8 = document.querySelector(".forth8");
const fifth8 = document.querySelector(".fifth8");
const pause8 = document.querySelector(".pause8");
const play8 = document.querySelector(".play8");
const width8 = document.documentElement.clientWidth - 71;
let activeImage8 = 0;

left8.addEventListener("click", function () {
  activeImage8--;
  if (activeImage8 == -1) {
    activeImage8 = 4;
  }
  pic1_8.style.marginLeft = `${-width8 * activeImage8}px`;
});
right8.addEventListener("click", function () {
  activeImage8++;
  if (activeImage8 == 5) {
    activeImage8 = 0;
  }
  pic1_8.style.marginLeft = `${-width8 * activeImage8}px`;
});

first8.addEventListener("click", function () {
  activeImage8 = 0;
  pic1_8.style.marginLeft = `${-width8 * activeImage8}px`;
});
second8.addEventListener("click", function () {
  activeImage8 = 1;
  pic1_8.style.marginLeft = `${-width8 * activeImage8}px`;
});
third8.addEventListener("click", function () {
  activeImage8 = 2;
  pic1_8.style.marginLeft = `${-width8 * activeImage8}px`;
});
forth8.addEventListener("click", function () {
  activeImage8 = 3;
  pic1_8.style.marginLeft = `${-width8 * activeImage8}px`;
});
fifth8.addEventListener("click", function () {
  activeImage8 = 4;
  pic1_8.style.marginLeft = `${-width8 * activeImage8}px`;
});

let nima8;
function auto8() {
  pic1_8.style.marginLeft = `${-width8 * activeImage8}px`;
  activeImage8++;
  if (activeImage8 == 5) {
    activeImage8 = 0;
  }
}
nima8 = setInterval(auto8, 3000);
pause8.addEventListener("click", function () {
  clearInterval(nima8);
  pause8.classList.toggle("hidden");
  play8.classList.toggle("hidden");
  activeImage8--;
});
play8.addEventListener("click", function () {
  nima8 = setInterval(auto8, 3000);
  pause8.classList.toggle("hidden");
  play8.classList.toggle("hidden");
  activeImage8--;
});