const img = document.querySelector('.user-img')
const testimonial = document.querySelector('.testimonial')
const user = document.querySelector('.user')
const job = document.querySelector('.job')

const slide = () => {
  if (user.innerHTML == 'John Tarkpor') {
    user.innerHTML = 'Tanya Sinclair'
    img.src = "images/image-tanya.jpg"
    testimonial.innerHTML = `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."`
    job.innerHTML = 'UX Engineer'
  } else {
    user.innerHTML = 'John Tarkpor'
    img.src = "images/image-john.jpg"
    testimonial.innerHTML = `"If you want to lay the best foindation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`
    job.innerHTML = 'Junior Front-end Developer'
  }
}
