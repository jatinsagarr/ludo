//---------Not changeable variable---//
var UPOB=[];//universal pos of p by pos
var SPOB=[];//safe pos
var turn="G";//Goti cutting checker
var cuti=false;
//---------Not changeable variable---//

$(document).ready(function(){
	SPOB["P2"]="P2";
	SPOB["P10"]="P10";
	SPOB["P15"]="P15";
	SPOB["P23"]="P23";
	SPOB["P28"]="P28";
	SPOB["P36"]="P36";
	SPOB["P41"]="P41";
	SPOB["P49"]="P49";

	for(var i=1;i<77;i++){
		$(".B"+i).html("");
		$(".R"+i).html("");
	}
	$(".BP").css('pointer-events','none');
	
	$(".GP").css('pointer-events','none');
	$("#cubeb,#cubeg").hide();
	chturn();
	
	
	
});



//---------changeable variable---//


var BPOB=[];//blue p by id on board index 0,1...
var BP=[];//blue p pos index #b1,#g3..
var PPBP=[];//previus Position blue p by id index #b1,#g3..
var BPD=0;//blue piece done
var bzi=5;// blue p z index


//---------Not changeable variable---//



//---------Blue Turn Configuration---//


//-----Changeable function------//

$("#cubeb").click(function(){
  $("#cubeb,#cubeg").css('pointer-events','none');
  $("#dice")[0].playbackRate=2.5;
  $("#dice")[0].play();
 
	 Gett();
	 setTimeout(function(){
	 Checkingcircle(BPOB,randomnumber,"B");
	 automovb(BPOB,randomnumber,"B",BP);
	 
	 },500);
 
});



$(".BP").click(function(){
	$(".BP").css('pointer-events','none');
	var idd="#"+$(this).attr("id");
	$(".BP").css({"z-index":"8"});
	$(".bc > div").addClass("jc");
	var nn=$(idd).data("step")+randomnumber;
	var mm=BPOB.length;
	if($(idd).data("step")==0){
		removecheckdd(idd,2,"Bb");
		i=2;
		s=i;
		move(idd,2,"Bb",BP);
		soo(2);
		$(idd).data("step",2);
		BPOB[mm]="#"+$(idd).attr("id");
		
	
	}else{
		removecheckdd(idd,nn,"Bb");
		i=$(idd).data("step");
		s=i;
		move(idd,nn,"Bb",BP);
		soo(nn);
		
	}

	setTimeout(function(){
    $("#B1,#B2,#B3,#B4").removeClass("cir");
    },200);
	
	delete idd;
	delete mm;
	delete nn;
});







function bppakki(cx){
var step=$(cx).data("step");
	    if(step==58){
			BPD++;
			$("#done")[0].play();
			cuti=true;
			for(var i=0;i<BPOB.length;i++){
				var uu="#"+$(cx).attr("id");
				if(BPOB[i]==uu){
                     BPOB.splice(i, 1);
				}
			}
			if(BPD==4){
				alert("BlUE WINS THE GAME");
			}
			
		}
	delete step;
	delete uu;
	
	
}


//cube logic
function Roll(x){
  $('#cubeb').attr('class', 'show'+x);
  };
  
var pr=77;
var randomnumber;




function Gett(){
 randomnumber = getRandomInt(1,6);
 if(randomnumber==pr){
  Gett();
 }else{
  Roll(randomnumber);
  pr=randomnumber;
  return true;
 }

}

//------Changeable function---//

//---------Blue Turn Configuration---//

//---------changeable variable---//


var GPOB=[];//blue p by id on board
var GP=[];//blue p pos
var PPGP=[];//previus Position blue p by id
var GPD=0;//blue piece done
var gzi=5;


//---------Not changeable variable---//



//---------green Turn Configuration---//


//-----Changeable function------//

$("#cubeg").click(function(){
  $("#cubeb,#cubeg").css('pointer-events','none');
  $("#dice")[0].playbackRate=2.5;
  $("#dice")[0].play();
 
	 Gettg();
	 setTimeout(function(){
	 Checkingcircle(GPOB,randomgreen,"G");
	 automovb(GPOB,randomgreen,"G",GP);
	 
	 },500);
 
});


$(".GP").click(function(){
	$(".GP").css('pointer-events','none');
	$(".GP").css({"z-index":"8"});
	var idd="#"+$(this).attr("id");
	var bj=$(idd).data("step");
	var mm=GPOB.length;
	var nn=$(idd).data("step")+randomgreen;
	$(".gc > div").addClass("jc");
	if(bj==0){
		removecheckdd(idd,2,"Gg");
		i=2;
		s=i;
		move(idd,2,"Gg",GP);
		soo(2);
		$(idd).data("step",2);
		GPOB[mm]="#"+$(idd).attr("id");
	    
	}else{
		removecheckdd(idd,nn,"Gg");
		i=$(idd).data("step");
		s=i;
		move(idd,nn,"Gg",GP);
		soo(nn);
		
	}
	
	setTimeout(function(){
  $("#G1,#G2,#G3,#G4").removeClass("cir");
  
  },200);
	
	delete idd;
	delete mm;
	delete nn;
	
});

function removecheckdd(cx,to,clr){
	var lb="."+clr.charAt(0)+$(cx).data("step");
	var um=clr.charAt(1)+"c";
	var uh=$(lb).data(um);
	var ph=clr.charAt(1);
	
	if(uh>0){
	   uh--;
	   $(lb).data(um,uh);
	   setTimeout(function(){
	   $(cx+" > div").css({"background-image":"url(css/"+ph+".png)"});
	   },200);
	}
	
	delete lb;
	delete uh;
	delete ph;
	delete um;
	
}

function gppakki(cx){
var step=$(cx).data("step");
	    if(step==58){
			GPD++;
			$("#done")[0].play();
			cuti=true;
			for(var i=0;i<GPOB.length;i++){
				var uu="#"+$(cx).attr("id");
				if(GPOB[i]==uu){
                     GPOB.splice(i, 1);
				}
			}
			if(GPD==4){
				alert("GREEN WINS THE GAME");
			}
			
		}
	delete step;
	delete uu;
	
	
}


//cube logic
function Rollg(x){
  $('#cubeg').attr('class', 'show'+x);
  };
  
var prg=77;
var randomgreen;




function Gettg(){
 randomgreen = getRandomInt(1,6);
 if(randomgreen==prg){
  Gettg();
 }else{
  Rollg(randomgreen);
  prg=randomgreen;
  return true;
 }

}

//------Changeable function---//

//---------green Turn Configuration---//



//-----Not Changeable function-----//
function chturn(){
	if(turn=="B"){
		turn="G";
	}else{
		turn="B";
	}
	if(turn=="B"){
		$("#cubeb").show();
		$("#cubeg").hide();
		$("#cubeb").css('pointer-events','auto');
	}else if(turn=="G"){
		$("#cubeg").show();
		$("#cubeb").hide();
		$("#cubeg").css('pointer-events','auto');
	}
	
	$("#ch")[0].play();
	$("#ch")[0].currentTime=0;
	}

function spchturn(xx,clr){
	if(xx){
		var mm="#cube"+clr.charAt(1);
	    $(mm).css('pointer-events','auto');
	}else{
		chturn();	
	}
}


function automovb(cls,diceno,clr,GPA){
	var co=0;
	var idd;
	var idm=[];
	var l=cls.length;
	for(var i=0;i<l;i++){
			var P=cls[i];
			var step=$(P).data("step")+diceno;
			if(step<59){
				idm[co]=P;
				co++;
				idd=P;
				
			}
			
		}
		if(diceno==6){
		for(var i=1;i<5;i++){
			var uu="#"+clr+i;
			if($(uu).data("step")==0){
			  co=6;	  
			}
		
		}
		}
		
	    if(co==1){
			$(idd).click();
		}else if(co==6){
			
		}else if(co==0){
			console.log("Next Turn");
			chturn();
		}else if((co>1) && (co<5)){
			checkposn(idm,GPA);
		}
	
	delete co;
	delete idd;
	delete step;
	delete P;
	delete l;
	
}

function checkposn(cls,po){
	if(cls.length==2){
		var a=po[cls[0]];
		var b=po[cls[1]];
		if(a==b){
			$(cls[1]).click();
		}
	}
	
	if(cls.length==3){
		var a=po[cls[0]];
		var b=po[cls[1]];
		var c=po[cls[2]];
		if((a==b)&&(b==c)&&(c==a)){
			$(cls[2]).click();
		}
	}
	if(cls.length==4){
		var a=po[cls[0]];
		var b=po[cls[1]];
		var c=po[cls[2]];
		var d=po[cls[3]];
		if((a==b)&&(b==c)&&(c==d)&&(d==a)){
			$(cls[3]).click();
		}
	}
	delete a;
	delete b;
	delete c;
	delete d;
}

function Checkingcircle(clrpos,dicenumber,clr){
	if(dicenumber==6){
		for(var i=1;i<5;i++){
			var uu="#"+clr+i;
			if($(uu).data("step")==0){
			  $(uu).addClass("cir");	
			  $(uu).css('pointer-events','auto');
			}
		
		}
		
		for(var i=0;i<clrpos.length;i++){
			var P=clrpos[i];
			var step=$(P).data("step")+dicenumber;
			if(step<59){
				$(P).addClass("cir");
				$(P).css('pointer-events','auto');
				$(P).css({"z-index":15});
				if(clrpos.length==1){
				return true;
				}
				
			}else{
				console.log("There error in position");
				if(clrpos.length==1){
				return false;
				}
			}
		}
		
			
		
	}else{
		for(var i=0;i<clrpos.length;i++){
			var P=clrpos[i];
			var step=$(P).data("step")+dicenumber;
			if(step<59){
				$(P).addClass("cir");
				$(P).css('pointer-events','auto');
				$(P).css({"z-index":15});
				if(clrpos.length==1){
				return true;}
			}else{
				 console.log("There error in position");
				if(clrpos.length==1){
				return false;
				}
			}
		}
		
		
	}
	delete uu;
	delete P;
	delete step;
	
}






var x;
var y;
var i;
var s;
function chpost(xx,yy,zz,clr){
	var uu="."+clr+yy;
	x=$(uu).data("top");
	y=$(uu).data("left");		

	$(xx).animate({
		top:x,
		left:y,
		
	},200);
	
	
  setTimeout(function(){
	 
	
	
	$(uu).addClass(zz);
	
	setTimeout(function(){
		
		$(uu).removeClass(zz);
	},500);},200);
	
	delete uu;
}




function move(cx,to,clr,GPA){
	var pos;
	if(cx.charAt(1)=="B"){
		pos=$(".B"+to).data("pos");
	}else if(cx.charAt(1)=="G"){
		pos=$(".G"+to).data("pos");
	}
	if(i==to+1){
	 $(cx).data("step",to);
		//do when p axqure pos
	if (typeof UPOB[pos] == 'undefined'){
		
	  safepos(cx,to,clr,GPA);
	}else{
		smeclr(cx,to,clr,GPA);
		
	}
		
  
	}else{
		
	  chpost(cx,i,clr,clr.charAt(0));
	  i++;
	  setTimeout(function(){
	  move(cx,to,clr,GPA);
	
	},200);
	}
}


function smeclr(cx,to,clr,GPA){
	var jj="."+clr.charAt(1)+"c > div";
	var pos;
	if(cx.charAt(1)=="B"){
		pos=$(".B"+to).data("pos");
		
	}else if(cx.charAt(1)=="G"){
		pos=$(".G"+to).data("pos");
	
	}
	if(UPOB[pos].charAt(0)==clr.charAt(0)){
	 console.log("Goti same color ki hai");
		$("#tw")[0].play();
		if(clr.charAt(0)=="B"){
			bppakki(cx);
		}else if(clr.charAt(0)=="G"){
			gppakki(cx);
		}		
		removeinnnnn(cx,to,GPA,clr);
		$(jj).removeClass("jc");
	}else{
	    
		safepos(cx,to,clr,GPA);
		
		
    }
	delete jj;
}


function removeinnnnn(cx,to,GPA,clr){
	if(clr.charAt(0)=="B"){
			removein(cx,to,PPBP,GPA,clr);
		}else if(clr.charAt(0)=="G"){
		    removein(cx,to,PPGP,GPA,clr);
		}	
	
}

function checkdd(cx,to,clr){
		var uu=clr.charAt(1)+"c";
		var lb="."+clr.charAt(0)+to;
		var vb=clr.charAt(1);
	    var BC=$(lb).data(uu);	
		
		if(vb=="b"){
		$(cx).css({"z-index":bzi});
		bzi++;
		}else if(vb=="g"){
			$(cx).css({"z-index":gzi});
			gzi++;
		}	
		if(BC==0){
	        $(lb).data(uu,1);
			$(lb).data("p1",cx);
			
		}else{
			BC++;
	        $(lb).data(uu,BC);
			$(lb).data("p1",cx);
			$(cx+" > div").css({"background-image":"url(css/"+BC+vb+".png)"});
			
		}
		
	    
		
	   	//$(cx).data("on",UPOB["P"+to]);
		
		
		
	    
		
		delete BC;
		delete uu;
		delete vb;
		delete lb;
	
		

}

function safepos(cx,to,clr,GPA){
	var pos;
	if(cx.charAt(1)=="B"){
		pos=$(".B"+to).data("pos");
	
	}else if(cx.charAt(1)=="G"){
		pos=$(".G"+to).data("pos");
		
	}
    var po=SPOB[pos];
	var jj="."+clr.charAt(1)+"c > div";
	
	if (typeof po == 'undefined'){
		//here goti cutting system	
		
		//removein(cx,to,PPBP,GPA);
	   console.log("Goti safe postion par nai hai");
		if(clr.charAt(0)=="B"){
			bppakki(cx);
		}else if(clr.charAt(0)=="G"){
			gppakki(cx);
		}
		cutthepaw(cx,to,clr,GPA);
		$(jj).removeClass("jc");
			
			
		
		
		
		
		
		 
		 
	}else{
		
	    removeinnnnn(cx,to,GPA,clr);
		$("#tw")[0].play();
		$(jj).removeClass("jc");
		console.log("goti safe par hai");
		
	}
	delete pos;
	delete jj;
}

function cutthepaw(cx,to,clr,GPA){
	var dd;
	var cut;
	var jj="."+clr.charAt(1)+"c > div";
	
	if(cx.charAt(1)=="B"){
		dd=$(".B"+to).data("gc");
		cut=$(".B"+to).data("p1");
		
	}else if(cx.charAt(1)=="G"){
		dd=$(".G"+to).data("bc");
		cut=$(".G"+to).data("p1");
	}
	
	if(dd==1){
		if(cx.charAt(1)=="G"){
		for(var i=0;i<BPOB.length;i++){
			if(BPOB[i]==cut){
				BPOB.splice(i,1);
			}
		}
		BP.splice(cut,1);
		PPBP.splice(cut,1);
		changepostcut(cut,0,"Bb");
		$(".G"+to).data("bc",0);
		cuti=true;
		removeinnnnn(cx,to,GPA,clr);
		$(jj).removeClass("jc");
		$("#cut")[0].play();
		
	}else if(cx.charAt(1)=="B"){
		for(var i=0;i<GPOB.length;i++){
			if(GPOB[i]==cut){
				GPOB.splice(i,1);
			}
		}
		GP.splice(cut,1);
		PPGP.splice(cut,1);
		changepostcut(cut,0,"Gg");
		$(".B"+to).data("gc",0);
		cuti=true;
		removeinnnnn(cx,to,GPA,clr);
		$(jj).removeClass("jc");
		$("#cut")[0].play();
		
	}else{
		alert("None jjjj");
		removeinnnnn(cx,to,GPA,clr);
		$(jj).removeClass("jc");
	}
		
		
	}else{
		removeinnnnn(cx,to,GPA,clr);
		$(jj).removeClass("jc");
	}
	
	
	
	
}

function changepostcut(xx,yy,clr){
	
	x=$(xx).data("top");
	y=$(xx).data("left");		

	$(xx).animate({
		top:x,
		left:y,
		
	},800);
	$(xx).data("step",0);
}

function removein(cx,to,arr,po,clr){
	var idd=$(cx).attr("id");
	var pos;
	checkdd(cx,to,clr);
	if(cx.charAt(1)=="B"){
		pos=$(".B"+to).data("pos");
		if(randomnumber==6){
			spchturn(true,"Bb");
		    cuti=false;
		}else if(cuti){
			spchturn(true,"Bb");
			cuti=false;
		}else{
			spchturn(false,"Bb");
			cuti=false;
		}
	
	}else if(cx.charAt(1)=="G"){
		pos=$(".G"+to).data("pos");
	if(randomgreen==6){
			spchturn(true,"Gg");
			cuti=false;
		}else if(cuti){
			spchturn(true,"Gg");
			cuti=false;
		}else{
			spchturn(false,"Gg");
			cuti=false;
		}
	}
if (typeof arr[idd] == 'undefined'){
	UPOB[pos]=idd;
	po["#"+idd]=pos;
	arr[idd]=pos;
}else{
	delete UPOB[arr[idd]];
	UPOB[pos]=idd;
	po["#"+idd]=pos;
	arr[idd]=pos;
	
}
delete idd;

}

function soo(to){
	 if(to==2){
		 $("#mo1")[0].play();
	 }
	if(s==to){
	 
  
	}else{
	  s++;
	  setTimeout(function(){
	 $("#mo1")[0].play();
	 $("#mo1")[0].currentTime=0;
	  soo(to);
	},200);
	}
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//------Not Changeable function----//


