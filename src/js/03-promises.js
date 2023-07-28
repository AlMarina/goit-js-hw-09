import Notiflix from 'notiflix';


const ref = {
  formEl: document.querySelector('.form'),
}

ref.formEl.addEventListener('submit', handlerSubmitForm);


function handlerSubmitForm(evt) {
  evt.preventDefault();
  const {delay, step, amount } = evt.currentTarget.elements
  const inputDelay = Number(delay.value);
  const inputStep = Number(step.value);
  const inputAmount = Number(amount.value);


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

