const form = document.getElementById('madLibForm');
const output = document.getElementById('madLibOutput');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const verb = document.getElementById('verb').value;
  const adverb = document.getElementById('adverb').value;
  const place = document.getElementById('place').value;


  const madLibStory = `In a quaint village nestled between rolling hills, a determined blacksmith was known for creating ${noun} sculptures.

  One day, inspired by a vivid dream, the blacksmith decided to forge a ${adjective}  statue that would capture the essence of ${verb}. 

  With his skilled hands, he meticulously shaped the molten metal into a ${adverb} adorned with a bright smile and outstretched arms. 
  
  The finished masterpiece, a symbol of happiness, quickly became the heart of the village named ${place}.`;

  output.innerText = madLibStory;
});
