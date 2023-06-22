const cardName = document.querySelector("#name");
const cardNumber = document.querySelector("#number");
const cardExpM = document.querySelector("#expM");
const cardExpY = document.querySelector("#expY");
const cardCvc = document.querySelector("#cvc");

const nameErr = document.querySelector(".nameErr");
const numberErr = document.querySelector(".numberErr");
const dateErr = document.querySelector(".dateErr");
const cvcErr = document.querySelector(".cvcErr");

const form = document.querySelector("form");
const completeSection = document.querySelector(".completeSection");

const confirmBtn = document.querySelector(".confirm");
const continueBtn = document.querySelector(".continue");

document // disable auto reload
  .querySelector("form")
  .addEventListener("submit", (event) => event.preventDefault());

/*******************************/
/*****   EVENT LISTENERS   *****/
/*******************************/
cardName.addEventListener("keyup", () => {
  document.querySelector(".cardName").innerHTML = cardName.value;
});
cardNumber.addEventListener("keyup", () => {
  document.querySelector(".cardNumber").innerHTML = cardNumber.value;
});
cardExpM.addEventListener("keyup", () => {
  document.querySelector(".expDateM").innerHTML = cardExpM.value;
});
cardExpY.addEventListener("keyup", () => {
  document.querySelector(".expDateY").innerHTML = cardExpY.value;
});
cardCvc.addEventListener("keyup", () => {
  document.querySelector(".cardCvc").innerHTML = cardCvc.value;
});

confirmBtn.addEventListener("click", () => {
  if (cardName.value == "") {
    nameErr.style = "visibility: visible";
    cardName.style = "border-color: var(--input-errors)";
  } else {
    nameErr.style = "visibility: hidden";
    cardName.style = "border-color: var(--Light-grayish-violet)";
  }
  if (!/^\d{16}$/g.test(cardNumber.value)) {
    numberErr.style = "visibility: visible";
    cardNumber.style = "border-color: var(--input-errors)";
  } else {
    numberErr.style = "visibility: hidden";
    cardNumber.style = "border-color: var(--Light-grayish-violet)";
  }
  if (!/^\d{1,}$/g.test(cardExpM.value) || !/^\d{1,}$/g.test(cardExpY.value)) {
    dateErr.style = "visibility: visible";
    cardExpM.style = "border-color: var(--input-errors)";
    cardExpY.style = "border-color: var(--input-errors)";
  } else {
    dateErr.style = "visibility: hidden";
    cardExpM.style = "border-color: var(--Light-grayish-violet)";
    cardExpY.style = "border-color: var(--Light-grayish-violet)";
  }
  if (!/^\d{1,}$/g.test(cardCvc.value)) {
    cvcErr.style = "visibility: visible";
    cardCvc.style = "border-color: var(--input-errors)";
  } else {
    cvcErr.style = "visibility: hidden";
    cardCvc.style = "border-color: var(--Light-grayish-violet)";
  }
  if (
    cardName.value !== "" &&
    /^\d{16}$/g.test(cardNumber.value) &&
    /^\d{1,}$/g.test(cardExpM.value) &&
    /^\d{1,}$/g.test(cardExpY.value) &&
    /^\d{1,}$/g.test(cardCvc.value)
  ) {
    form.style = "visibility: hidden";
    completeSection.style = "display: grid";
  }
});

continueBtn.addEventListener("click", () => {
  form.style = "visibility: visible";
  completeSection.style = "display: none";
  cardName.value = "";
  cardNumber.value = "";
  cardExpM.value = "";
  cardExpY.value = "";
  cardCvc.value = "";
});
