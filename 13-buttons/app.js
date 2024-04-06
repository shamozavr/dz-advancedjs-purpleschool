const script = document.querySelector('script');

const wrapper = document.createElement('div');
document.body.insertBefore(wrapper, script);

for (let i = 0; i < 5; i++) {
  const button = document.createElement('button');
  button.innerHTML = 'Нажми меня';
  wrapper.append(button);
}

const counter = document.createElement('div');
counter.innerHTML = 0;
document.body.insertBefore(counter, script);

wrapper.addEventListener('click', (evt) => {
  [...wrapper.children].map(el => el.innerHTML = 'Нажми меня');
  evt.target.innerHTML = 'Нажата';
  counter.innerHTML = Number(counter.innerHTML) + 1;
})
