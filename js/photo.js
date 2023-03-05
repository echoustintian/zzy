var photo1=document.getElementById('photo1');
var photo2=document.getElementById('photo2');
var btn=document.querySelector('.btn');
var time=1;

btn.onclick=function(){
    if(time==0){
        photo1.src="./img/1.jpg";
        photo2.src="./img/2.jpg";
    }
    if(time==1){
        photo1.src="./img/3.jpg";
        photo2.src="./img/4.jpg";        
    }
    if(time==2){
        photo1.src="./img/5.jpg";
        photo2.src="./img/6.jpg";
    }
    time++;
    if(time==3)time=0;
    // console.log("great");
}