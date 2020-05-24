/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');     
  }     
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  
  });
  closeBtn.addEventListener('click', switchModal);
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)
  
  new WOW().init();

  // Form validation
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },  
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlegth: "Имя не короче двух букв"
      }, 
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }  
    }
    
  });
  // telephone mask
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7(___) __-__-___"});

});

$('.control__form').validate({
  errorClass: "invalid",
  rules: {
    userName: {
      required: true,
      minlength: 2
    },  
    userPhone: "required",
    userPhone: {
      required: true
      
    }
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlegth: "Имя не короче двух {2} букв"
    }, 
    userPhone: "Телефон обязателен",
    userPhone: {
      required: "Обязательно"
     
      
    }  
  }
  
});


  // Form validation
$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    userName: {
      required: true,
      minlength: 2
    },  
    userPhone: "required",
    userQuestion: {
      required: true,
      Question: true
    }
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlegth: "Имя не короче двух букв"
    }, 
    userPhone: "Телефон обязателен",
    userQuestion: {
      required: "Напишите вопрос"      
    }  
  }
 
});