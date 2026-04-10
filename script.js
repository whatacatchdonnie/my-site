const title = document.getElementById('title');
const mybtn = document.getElementById('mybtn');

console.log('Знайшов заголовок:', title); 
console.log('Знайшов кнопку:', mybtn);

mybtn.addEventListener('click', function() { 
  title.textContent = 'JS працює! 🎉'; 
  title.style.color = 'chocolate';
   mybtn.textContent = 'Натиснуто ✓'; 
  mybtn.style.background = 'chocolate';   
mybtn.style.color = 'white'; });