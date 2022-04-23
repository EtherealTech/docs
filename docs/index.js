const frame = document.getElementById('frame');
const input = document.getElementById('input');
const url = new URL('https://translate.google.com/translate_tts?ie=UTF-8&tl=my&q=&total=1&idx=0&client=tw-ob&ttsspeed=1');

input.addEventListener('change', () => {
  let q = input.value;
  url.searchParams.append('q', q);
  frame.src = url.toString();
});
