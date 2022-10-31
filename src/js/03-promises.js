import { Notify } from 'notiflix';

const getEl = selector => document.querySelector(selector)

getEl('.form').addEventListener('submit', formSubmit)


function formSubmit(e) {
    e.preventDefault();

    let  delayRefValue = Number(getEl('[name="delay"]').value);
    let  stepRefValue = Number(getEl('[name="step"]').value);
    let  amountRefValue = Number(getEl('[name="amount"]').value);

    getPromises( delayRefValue, stepRefValue, amountRefValue)
}


function getPromises(delay,step,amount) {
  for (let position = 1; position <= amount; position += 1) {
    
    createPromise(position, delay)
        .then(({position,delay})=>{Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})
        .catch(({position, delay}) => {Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);});
      delay += step;
  }
}


function createPromise(position, delay) {
 
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
      }, delay);

  }) 
  
  }

  