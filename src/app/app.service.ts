import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  
  
    acc() {
        var acc = document.getElementsByClassName("accordion");
        var i;
        var modal = document.getElementById('id01');

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    
    cls(){
    document.getElementById('id01').style.display='none'
    }
}

