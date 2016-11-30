window.addEventListener("load",CargarTodo,false);

		function CargarTodo(){
			canvasApp();
		}
		function canvasApp(){
			var canvas= document.getElementById("micanvas");
			var context = canvas.getContext("2d");
			var bolitas=[];

			function Bolita(x,y,radio,r,g,b){

				this.x=x;
				this.y=y;
				this.radio=radio;
				this.r=r;
				this.g=g;
				this.b=b;
				this.vel = Math.floor(Math.random()*5)+1;
				this.dirX = (Math.floor(Math.random()*2)==1?1:-1)*this.vel;
				this.dirY =	(Math.floor(Math.random()*2)==1?1:-1)*this.vel;
			}

			Bolita.prototype.pintarse=function(){
				context.fillStyle="rgba("+this.r+","+this.g+","+this.b+",0.5)";

				context.beginPath();
				context.arc(this.x,this.y,this.radio,0,Math.PI*2,true);
				context.fill();
			}

			function agregarBolita(){
				var radio =Math.floor(Math.random()*25)+1;
				var bolita = new Bolita(Math.floor(Math.random()*(canvas.width-radio)),Math.floor(Math.random()*(canvas.height-radio)),radio,Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));

				bolitas.push(bolita);
			}

			function pintarBolitas(){
				context.clearRect(0,0,canvas.width,canvas.height);

				for(var bol in bolitas){
					var x = bolitas[bol].x;
					var y = bolitas[bol].y;
					var r = bolitas[bol].radio;
					if(x+r+bolitas[bol].dirX>=canvas.width||x-r+bolitas[bol].dirX<=0){
						bolitas[bol].dirX *=-1;
					}
					if(y+r>canvas.height||y-r<0){
						bolitas[bol].dirY*=-1;
					}
					if(x<0||x>canvas.width||y<0||y>canvas.height){
						console.log("Me sali "+bolitas[bol].dirX+" "+bolitas[bol].dirY);
					}
					bolitas[bol].x+=bolitas[bol].dirX;
					bolitas[bol].y+=bolitas[bol].dirY;
					bolitas[bol].pintarse();

				}
				window.requestAnimationFrame(pintarBolitas);

			}
			function dibujarpantalla(){

				window.addEventListener("click",agregarBolita,false);
				window.requestAnimationFrame(pintarBolitas);

			}
			dibujarpantalla();
		}