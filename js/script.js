// for boost block

const qualityInput = document.getElementById(`before-after`);
const desktopImg = document.querySelector(`.featurecontent-img`);
const redToGreenInput = document.getElementById(`before-after-to-green`);
const redToGreenFrame = document.querySelector(`.container__frame`);
const redToGreenTableImg = redToGreenFrame.querySelector(`img`);
const inboundInput = document.getElementById(`before-after-inbound`);
const beforeAfterList = document.querySelectorAll(`.before-after ul`);

window.onload = () => {
  qualityInput.onchange = () => {
    if (qualityInput.checked) {
      desktopImg.src = `img/dashboard-after.svg`;
    } else {
      desktopImg.src = `img/dashboard-before.svg`;
    }
  };

  redToGreenInput.onchange = () => {
    if (redToGreenInput.checked) {
      redToGreenFrame.classList.add("active");
      redToGreenTableImg.src = `img/green-table.svg`;
    } else {
      redToGreenTableImg.src = `img/red-table.svg`;
      redToGreenFrame.classList.remove("active");
    }
  };

  inboundInput.onchange = () => {
    if (inboundInput.checked) {
      beforeAfterList[0].classList.add(`fadeOut`);
      setTimeout(() => {
        beforeAfterList[0].classList.remove(`active`);
        beforeAfterList[0].classList.remove(`fadeOut`);
        beforeAfterList[1].classList.add(`active`);
      }, 900);
    } else {
      beforeAfterList[1].classList.add(`fadeOut`);
      setTimeout(() => {
        beforeAfterList[1].classList.remove(`active`);
        beforeAfterList[1].classList.remove(`fadeOut`);
        beforeAfterList[0].classList.add(`active`);
      }, 900);
    }
  };
};
