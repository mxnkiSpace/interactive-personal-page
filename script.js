function onMyButton(){
    if (color){
        document.body.style.backgroundColor = "#242836";
        document.body.style.color = "white";
        color = false;
    }else{
        document.body.style.backgroundColor = "antiquewhite";
        document.body.style.color = "#1a1a1a";

        color = true;
    }

}

var color = true;

var n = sessionStorage.getItem('on_load_counter');

if (n === null) {
  n = 0;
}
n++;

sessionStorage.setItem("on_load_counter", n);

document.getElementById('visit-count').textContent = 
  "These are the number of times you have accessed the page: " + n;