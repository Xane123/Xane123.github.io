/* all styles are internal, only link  to searchHelp.css */
/* Position is based on font size so change the font size through the font tag or do it globally */



//**************************  GLOBAL VARIABLES  ********************************************
//****************************************************************************************

// hasIcon, isIcon - expando expressions  must be present in CSS

// var moniker= "ms-its:";											// for WEB set to: var moniker="";	
// var sSharedCHM= moniker+"ntshared.chm::/";			// for WEB set to: var sSharedCHM="";

var sSharedCHM= "";
var arrowCold= sSharedCHM + "arrowCold.gif";	
var arrowHot= sSharedCHM + "arrowHot.gif";	
var activeArrowCold= sSharedCHM + "activeArrowCold.gif";	
var activeArrowHot= sSharedCHM + "activeArrowHot.gif";	
var lastArrow, lastTopic, topic;

var andPathx = new Array(1,1,3,1,1);
var andPathy = new Array(1,2,5,8,9);
var M = 0;

//******************************  FUNCTIONS **********************************************
//***************************************************************************************

//*** document.onload *********************************************************************

function window.onload(){ 
lastArrow= null;
lastTopic= "start";
topic= "start";

// soundDoc.document.close();
// soundDoc.document.write("<html><head></head></html>");
}


//*** document.onmouseover ****************************************************************

function document.onmouseover(){
var e= window.event.srcElement;
var hasIcon= (e.tagName=="A");
var isIcon= (e.className.toLowerCase()=="icon");
var oImg;

if (hasIcon || isIcon){
     oImg= getIcon(e);
	 if (oImg.src.indexOf(arrowCold)>0) oImg.src= arrowHot;
	 if (oImg.src.indexOf(activeArrowCold)>0) oImg.src= activeArrowHot;
	 }
}

//*** document.onmouseout ****************************************************************

function document.onmouseout(){
var e= window.event.srcElement;
var hasIcon= (e.tagName=="A");
var isIcon= (e.className.toLowerCase()=="icon");
var oImg;

if (hasIcon || isIcon){
     oImg= getIcon(e);
	 if (oImg.src.indexOf(arrowHot)>0) oImg.src= arrowCold;
	 if (oImg.src.indexOf(activeArrowHot)>0) oImg.src= activeArrowCold;
	 }
}

//*** document.onclick ********************************************************************

function document.onclick(){
var e= window.event.srcElement;
var hasIcon= (e.tagName=="A");
var isIcon= (e.className.toLowerCase()=="icon");
var oImg;

if (hasIcon || isIcon) {
	if (isIcon) {
        oImg= e; 
	    e= e.parentElement;
	}
    else oImg= getIcon(e);

	topic= e.id;
	// soundDoc.document.close();	

	M=0;	
	
		clearTimeout(timer);
	moveHand();
	
    if (oImg != lastArrow) 
	     if (oImg.src.indexOf(arrowHot)>0) {
		     if (lastTopic != "start") lastArrow.src= arrowCold;	
	         oImg.src= activeArrowHot;
		     lastArrow= oImg;
	     }
	lastTopic= e.id;
}

event.returnValue = false;
}

//**  getIcon *******[used by document.onmouseover, document.onmouseout, document.onclick]*******
//  Find the first image in the children of the current srcElement.   
// (allows the  image to be placed anywhere inside the <A HREF> tag)

function getIcon(object) {
var oImg = object;

       if (oImg.tagName != "IMG") oImg=oImg.children.tags("IMG")(0);
       return oImg;
}

var timer;

function moveHand()	{
	
	if(M == 0) {
	
	 self.run.windows=topic + ".exe";
		eval(lastTopic+"Msg").style.visibility="hidden";
        if(lastTopic != "start") 
		   eval(lastTopic+"Search").style.visibility="hidden";
	    blank.src = "blank.gif";
		}
	

    handDiv.style.visibility='visible';

	handDiv.style.top = (1.6 * andPathx[M])+"em";
	handDiv.style.left = (1.6 * andPathy[M])+"em";
	
	M++
		
	if(M == 5)  show("Msg");
	if(M == 34) show("Search");
	
	if(M == 49)	{
		searchButton.style.color="Gray";
		searchButton.style.borderBottomColor = "GainsBoro";
		searchButton.style.borderRightColor = "GainsBoro";
		searchButton.style.borderTopColor = "SlateGray";
		searchButton.style.borderLeftColor = "SlateGray";
	}
	if(M == 50)	{
		searchButton.style.color =  "Black";
		searchButton.style.borderBottomColor = "SlateGray";
		searchButton.style.borderRightColor = "SlateGray";
		searchButton.style.borderTopColor = "Gainsboro";
		searchButton.style.borderLeftColor = "Gainsboro";
	}	
	if (M < andPathx.length)
		timer= setTimeout("moveHand()", 125,"JScript");
	else {
	    blank.src = topic + ".gif";
		timer= setTimeout("handDiv.style.visibility='hidden'", 1000,"JScript");
	}
}	

function show(box){
    eval(topic+box).filters.revealTrans.apply();
    eval(topic+box).style.visibility="visible"; 
    eval(topic+box).filters.revealTrans.play();
	}

	
	 