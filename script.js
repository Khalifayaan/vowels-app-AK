

const inputText = document.getElementById('input-text');
const countBtn = document.getElementById('count-btn');
const vowelCount = document.getElementById('vowel-count');


function countVowels() {
  const text = inputText.value.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }

  vowelCount.textContent = count;
}

countBtn.addEventListener('click', countVowels);