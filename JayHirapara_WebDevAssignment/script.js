function toggleTestimonials() {
  const section = document.getElementById('more-testimonials');
  const btn = document.querySelector('.show-more');
  if (section.classList.contains('hidden')) {
    section.classList.remove('hidden');
    btn.innerText = 'Show Less';
  } else {
    section.classList.add('hidden');
    btn.innerText = 'Show More';
  }
}
