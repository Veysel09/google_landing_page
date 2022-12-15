const button = document.getElementById('leftButton');

const buttonText = [
  "I'm feeling Lucky",
  'Ich fühle mich Glücklich',
  'Kendimi sansli hissediyorum',
  'Beynim yandi ',
  'Ne anlatiyorsunuz siz',
  'Ben böyle isin',
];

button.onmouseover = () => {
  const val = Math.floor(Math.random() * buttonText.length);
  button.innerText = buttonText[val];
};

button.onmouseout = () => {
  button.innerText = 'Onmouse Effect';
};