const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const image = document.querySelector(".image");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love You too.";
  image.src =
    "https://i.pinimg.com/originals/3b/56/33/3b56330f710c3a978f27c9cc7e099180.gif";
  noBtn.remove();
  yesBtn.remove();
});

noBtn.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));

  noBtn.style.position = "absolute";
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
