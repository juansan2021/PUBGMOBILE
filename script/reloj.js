var scale_list=document.querySelector(".scale_list");
var num_list=document.querySelector(".num_list");
var hour=document.querySelector(".hour");
var min=document.querySelector(".min");
var sec=document.querySelector(".sec");

/**
   * Escala
 */
function setScale(){
	for(var i=0;i<60;i++){
		scale_list.innerHTML+=`<li class="scale" style="transform:translateY(-50%) rotate(${i*6}deg)"></li>`;
	}
}
setScale()

/**
   * Numero
 */
function setNum(){
	for(var i=1;i<13;i++){
		num_list.innerHTML+=`
		<li class="num" style="transform:translateY(-50%) rotate(${i*30-90}deg)">
		    <span style="transform:rotate(${-(i*30-90)}deg)">${i}</span>
		</li>`;
	}
}
setNum()

/**
   * Puntero
 */
var timer=0;
timer=setInterval(function(){
	// Obtener la hora actual
	var time=new Date();
	var hours=time.getHours();
	var minute=time.getMinutes();
	var second=time.getSeconds();
	
	// Obtener el ángulo de rotación del puntero
	hour.style.transform=`rotate(${hours*30-90}deg)`;
	min.style.transform=`rotate(${minute*30-90}deg)`;
	sec.style.transform=`rotate(${second*6-90}deg)`;
},1000)
