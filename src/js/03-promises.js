import Notiflix from 'notiflix';


const ref = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]')
}

ref.formEl.addEventListener('submit', handlerSubmitForm);


function handlerSubmitForm(evt) {
  evt.preventDefault();
  const inputDelay = Number(ref.delayEl.value);
  const inputStep = Number(ref.stepEl.value);
  const inputAmount = Number(ref.amountEl.value);

  for (let i = 1; i <= inputAmount; i += 1) {
    const step = inputDelay + inputStep * (i - 1);
    createPromise(i, step)
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
 }

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else
        rej({ position, delay });
    }, delay);
  });
}

