const faqText = document.querySelectorAll('.faq-text');
const questions = document.querySelectorAll('.question');



questions.forEach(function(question){
  question.addEventListener('click', function(){
    questions.forEach(function(item){
      if(item !== question){
        item.classList.remove('show-text');
        item.classList.remove('active');
        item.classList.remove('arrow-active');
      }
    });
    
    question.classList.toggle('show-text');
    question.classList.toggle('active');
    question.classList.toggle('arrow-active');
  });
});
