// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';

const form = document.querySelector(".form");
const delay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let delayFirst = Number(delay.value);
  let step = Number(delayStep.value);
  let amountValue = Number(amount.value);

  for(let i = 0; i <= amountValue; i += 1) {
    let delayPromise = step * i + delayFirst;
    createPromise(i + 1, delayPromise)
    .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
