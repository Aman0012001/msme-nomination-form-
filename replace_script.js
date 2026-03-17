const fs = require('fs');
const file = 'd:/000/nomination form/msme-nomination-form-/assets/index-d4w-iovm.js';
let content = fs.readFileSync(file, 'utf8');

const target = 'g.jsxs(Xl, { onValueChange: n.onChange, defaultValue: n.value, children: [g.jsx(Lt, { children: g.jsx(ta, { className: "h-10 sm:h-9 text-sm sm:text-base touch-manipulation transition-smooth", children: g.jsx(Jl, { placeholder: "Choose..." }) }) }), g.jsx(na, { className: "z-[9999] bg-background border shadow-dropdown max-h-[200px] sm:max-h-[300px]", children: ON.map(s => g.jsx(Ar, { value: s, className: "py-2 px-3 touch-manipulation", children: s }, s)) })] })';

const replacement = 'g.jsx(Lt, { children: g.jsx(On, { placeholder: "Enter your state", className: "h-10 sm:h-9 text-sm sm:text-base touch-manipulation transition-smooth focus:shadow-form", ...n }) })';

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Replaced successfully.');
} else {
  console.log('Target string not found. Please review the exact content.');
}
