var i = 10;
var nombre = 'Oscar';

var f = function (){
	alert('Saludar');
}

var app = {
	contar : function(){
		for (var i = 0; i < 0; i++) {
			alert('Contador'+i)
		}
	},
	par : function(num){
		if (num%2==0) {
			return true;
		}else{
			return false;
		}
	},
	ciclo:function(){
		for (var i = 1; i <= 10; i++) {
			if(this.par(i)){
				alert(i+' Es par');
			}else{
				alert(i+' Es impar');
			}
		}
	}
}
app.ciclo();