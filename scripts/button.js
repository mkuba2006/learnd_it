const studentButton = document.getElementById('student');
const tutorButton = document.getElementById('tutor');
const buttonAnimation = document.querySelector('.button-animation');
studentButton.classList.add('active');

tutorButton.addEventListener('click', () => {
  buttonAnimation.style.left = '48%';
  tutorButton.classList.add('active');
  studentButton.classList.remove('active');
});

studentButton.addEventListener('click', () => {
  buttonAnimation.style.left = '0';
  studentButton.classList.add('active');
  tutorButton.classList.remove('active');
});