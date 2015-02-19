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