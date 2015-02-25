// Табы

var links = document.querySelectorAll(".index-services-list ul a"); 

for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
        event.preventDefault(); 
        if(!this.hasAttribute("active")) {
            for (var j = 0; j < links.length; j++) {
                links[j].classList.remove("active");
            }
            this.classList.add("active");
            
            var allTabs = document.querySelectorAll(".service-details");
            for (j = 0; j < allTabs.length; j++) {
                allTabs[j].classList.remove("active");
            }
            var hr = this.getAttribute("href");
            var tab = document.querySelector(hr);
            tab.classList.add("active");
        }
    })
}





// Модальное окно - отправка письма
var emailLink = document.querySelector(".js-email"); 
if(emailLink) {
    var emailPopup = document.querySelector(".modal-content-email"); 
    var emailClose = emailPopup.querySelector(".modal-content-close"); 
    var emailCloseBtn = emailPopup.querySelector(".btn-modal-cancel"); 
    var emailForm = emailPopup.querySelector("form"); 
    var emailMail = emailPopup.querySelector("[name=email]"); 
    var emailText = emailPopup.querySelector("[name=text]"); 
    var emailName = emailPopup.querySelector("[name=name]"); 
    var storageName = localStorage.getItem("name");
    var storageEmail = localStorage.getItem("email");

    emailLink.addEventListener("click", function(event) { 
        event.preventDefault(); 
        emailPopup.classList.add("active"); 
        if(storageName && storageEmail) {
            emailName.value = storageName;
            emailMail.value = storageEmail;
            emailText.focus();
        }
        else if (storageName) {
            emailName.value = storageName;
            emailMail.focus();
        }
        else if (storageEmail) {
            emailMail.value = storageEmail;
            emailName.focus();
        }
        else {
            emailName.focus();
        }
    }); 

    emailClose.addEventListener("click", function(event) {
        event.preventDefault();
        emailPopup.classList.remove("active");
    });

    emailCloseBtn.addEventListener("click", function(event) {
        event.preventDefault();
        emailPopup.classList.remove("active");
    });

    emailForm.addEventListener("submit", function(event) {
        if (!(emailMail.value && emailText.value)) {
          event.preventDefault();
          emailPopup.classList.add("modal-error");
          setTimeout(function() { emailPopup.classList.remove("modal-error"); }, 1500);
        } else {
            localStorage.setItem("email", emailMail.value);
            localStorage.setItem("name", emailName.value);
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) { 
            if (emailPopup.classList.contains("active")) { 
                emailPopup.classList.remove("active"); 
            } 
        }
    });
}





// Модальное окно - карта
var mapLink = document.querySelector(".js-map"); 
if(mapLink) {
    var mapPopup = document.querySelector(".modal-content-map"); 
    var mapClose = mapPopup.querySelector(".modal-content-close"); 
    mapLink.addEventListener("click", function(event) { 
        event.preventDefault(); 
        mapPopup.classList.add("active"); 
    }); 

    mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("active");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) { 
            if (mapPopup.classList.contains("active")) { 
                mapPopup.classList.remove("active"); 
            } 
        }
    });
}





// Модальное окно - товар добавлен в корзину
var addToCartLinks = document.querySelectorAll(".js-addtocart");
if(addToCartLinks) {
    var addToCartPopup = document.querySelector(".modal-content-addtocart"); 
    var addToCartClose = addToCartPopup.querySelector(".modal-content-close"); 
    var addToCartCloseBtn = addToCartPopup.querySelector(".btn-modal-cancel"); 
    for (var j = 0; j < addToCartLinks.length; j++) {
        addToCartLinks[j].addEventListener("click", function(event) {
            event.preventDefault();
            addToCartPopup.classList.add("active");
        });
    }

    addToCartClose.addEventListener("click", function(event) {
        event.preventDefault();
        addToCartPopup.classList.remove("active");
    });

    addToCartCloseBtn.addEventListener("click", function(event) {
        event.preventDefault();
        addToCartPopup.classList.remove("active");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) { 
            if (addToCartPopup.classList.contains("active")) { 
                addToCartPopup.classList.remove("active"); 
            } 
        }
    });
}


