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

var emailLink = document.querySelector(".js-email"); 
if(emailLink) {
    var emailPopup = document.querySelector(".modal-content-email"); 
    var emailClose = emailPopup.querySelector(".modal-content-close"); 
    emailLink.addEventListener("click", function(event) { 
        event.preventDefault(); 
        emailPopup.classList.add("active"); 
    }); 

    emailClose.addEventListener("click", function(event) {
        event.preventDefault();
        emailPopup.classList.remove("active");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) { 
            if (emailPopup.classList.contains("active")) { 
                emailPopup.classList.remove("active"); 
            } 
        }
    });
}

var addToCartLinks = document.querySelectorAll(".js-addtocart");
if(addToCartLinks) {
    var addToCartPopup = document.querySelector(".modal-content-addtocart"); 
    var addToCartClose = addToCartPopup.querySelector(".modal-content-close"); 
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

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) { 
            if (addToCartPopup.classList.contains("active")) { 
                addToCartPopup.classList.remove("active"); 
            } 
        }
    });
}



