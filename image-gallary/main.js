const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(i = 1; i < 6; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic"+i+".jpg");
    thumbBar.appendChild(newImage);
}

const thumb = document.querySelectorAll("img")
console.log(":"+thumb.entries()+"$")
for(i = 0; i < 6 ; i++){
    thumb[i].onclick = function(e){
        hoge = e.target.getAttribute("src")
        console.log(e.target.getAttribute("src"));
        displayedImage.setAttribute('src', hoge);
    }    
}

btn.onclick = function(e){
    console.log(btn.getAttribute("class"))
    if(btn.getAttribute("class") == "dark" ){
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute('class', "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
// thumbBar.firstChild.onclick = function(e){
//     alert("Hoge");
// }

/* Wiring up the Darken/Lighten button */
