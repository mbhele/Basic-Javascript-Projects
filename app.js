
    var link = document.querySelector('button');
     
    var valueRGB = document.getElementById('rgbValues');


link.addEventListener('click', changeBjColors);

 function changeBjColors(e){
    var x = Math.floor(Math.random()*1000);
    var y = Math.floor(Math.random()*1000);
    var z = Math.floor(Math.random()*1000);
      console.log(typeof x)
      console.log(x,y,z)
       document.body.style.backgroundColor=`rgba(${x},${y},${z},4)`;
        valueRGB.innerHTML= `{${x},${y},${z},4}`;
   
     e.preventDefault();
 }

