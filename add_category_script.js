const fs = require('fs');
const file = 'd:/000/nomination form/msme-nomination-form-/assets/index-d4w-iovm.js';
let content = fs.readFileSync(file, 'utf8');

const regex = /(IN\s*=\s*\[)(.*?)\]/;
const match = content.match(regex);

if (match) {
  const innerArray = match[2];
  if (!innerArray.includes("Best Insurance E-learning Company of the Year")) {
      const newInnerArray = innerArray + (innerArray.trim().endsWith(',') || innerArray.trim() === '' ? '' : ',') + '"Best Insurance E-learning Company of the Year"';
      const replacement = match[1] + newInnerArray + ']';
      content = content.replace(regex, replacement);
      fs.writeFileSync(file, content);
      console.log('Appended successfully.');
  } else {
      console.log('Category already exists.');
  }
} else {
  console.log('Could not find IN array.');
}
