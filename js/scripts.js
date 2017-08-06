var buttons = document.getElementsByClassName('button');
var display = document.querySelector("p")
for (var i = 0, length = buttons.length; i < length; i++) {
        // display = buttons[i].innerText;
        // alert(display);
        buttons[i].addEventListener('click', function() {
        	if (this.click) {
        		display.innerText = this.value;
        		console.log(this.value);
        	}
        });  
    }