var fmbubble={
	disableanchorlink: true,
 hidedivmouseout: [true, 200],
	ajaxloadingmsg: "Loading content. Please wait...", 
	ajaxbustcache: true, 

	getposOffset:function(what, offsettype){
		return (what.offsetParent)? what[offsettype]+this.getposOffset(what.offsetParent, offsettype) : what[offsettype]
	},

	isContained:function(m, e){
		var e=window.event || e
		var c=e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement)
		while (c && c!=m)try {c=c.parentNode} catch(e){c=m}
		if (c==m)
			return true
		else
			return false
	},

	show:function(anchorobj, subobj, e){
		if (!this.isContained(anchorobj, e)){
			var e=window.event || e
			if (e.type=="click" && subobj.style.visibility=="visible"){
				subobj.style.visibility="hidden"
				return
			}
			var horizontaloffset=(subobj.dropposition[0]=="left")? -(subobj.offsetWidth-anchorobj.offsetWidth) : 0 
			var verticaloffset=(subobj.dropposition[1]=="top")? -subobj.offsetHeight : anchorobj.offsetHeight 
			subobj.style.left=this.getposOffset(anchorobj, "offsetLeft") + horizontaloffset + "px"
			subobj.style.top=this.getposOffset(anchorobj, "offsetTop")+verticaloffset+"px"
			subobj.style.clip=(subobj.dropposition[1]=="top")? "rect(auto auto auto 0)" : "rect(0 auto 0 0)" 
			subobj.style.visibility="visible"
			subobj.startTime=new Date().getTime()
			subobj.contentheight=parseInt(subobj.offsetHeight)
			if (typeof window["hidetimer_"+subobj.id]!="undefined") 
				clearTimeout(window["hidetimer_"+subobj.id])
			this.slideengine(subobj, (subobj.dropposition[1]=="top")? "up" : "down")
		}
	},

	curveincrement:function(percent){
		return (1-Math.cos(percent*Math.PI)) / 2 
	},

	slideengine:function(obj, direction){
		var elapsed=new Date().getTime()-obj.startTime
		if (elapsed<obj.glidetime){ //if time run is less than specified length
			var distancepercent=(direction=="down")? this.curveincrement(elapsed/obj.glidetime) : 1-this.curveincrement(elapsed/obj.glidetime)
			var currentclip=(distancepercent*obj.contentheight)+"px"
			obj.style.clip=(direction=="down")? "rect(0 auto "+currentclip+" 0)" : "rect("+currentclip+" auto auto 0)"
			window["glidetimer_"+obj.id]=setTimeout(function(){fmbubble.slideengine(obj, direction)}, 10)
		}
		else{ //if animation finished
			obj.style.clip="rect(0 auto auto 0)"
		}
	},

	hide:function(activeobj, subobj, e){
		if (!fmbubble.isContained(activeobj, e)){
			window["hidetimer_"+subobj.id]=setTimeout(function(){
				subobj.style.visibility="hidden"
				subobj.style.left=subobj.style.top=0
				clearTimeout(window["glidetimer_"+subobj.id])
			}, fmbubble.hidedivmouseout[1])
		}
	},

	hidediv:function(subobjid){
		document.getElementById(subobjid).style.visibility="hidden"
	},

	ajaxconnect:function(pageurl, divId){
		var page_request = false
		var bustcacheparameter=""
		if (window.XMLHttpRequest) // if Mozilla, IE7, Safari etc
			page_request = new XMLHttpRequest()
		else if (window.ActiveXObject){ // if IE6 or below
			try {
			page_request = new ActiveXObject("Msxml2.XMLHTTP")
			} 
			catch (e){
				try{
				page_request = new ActiveXObject("Microsoft.XMLHTTP")
				}
				catch (e){}
			}
		}
		else
			return false
		document.getElementById(divId).innerHTML=this.ajaxloadingmsg
		page_request.onreadystatechange=function(){fmbubble.loadpage(page_request, divId)}
		if (this.ajaxbustcache)
			bustcacheparameter=(pageurl.indexOf("?")!=-1)? "&"+new Date().getTime() : "?"+new Date().getTime()
		page_request.open('GET', pageurl+bustcacheparameter, true)
		page_request.send(null)
	},

	loadpage:function(page_request, divId){
		if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1)){
			document.getElementById(divId).innerHTML=page_request.responseText
		}
	},

 init:function(anchorid, pos, glidetime, revealbehavior){
		var anchorobj=document.getElementById(anchorid)
		var subobj=document.getElementById(anchorobj.getAttribute("rel"))
		var subobjsource=anchorobj.getAttribute("rev")
		if (subobjsource!=null && subobjsource!="")
			this.ajaxconnect(subobjsource, anchorobj.getAttribute("rel"))
		subobj.dropposition=pos.split("-")
		subobj.glidetime=glidetime || 1000
		subobj.style.left=subobj.style.top=0
		if (typeof revealbehavior=="undefined" || revealbehavior=="mouseover"){
			anchorobj.onmouseover=function(e){fmbubble.show(this, subobj, e)}
			anchorobj.onmouseout=function(e){fmbubble.hide(subobj, subobj, e)}
			if (this.disableanchorlink) anchorobj.onclick=function(){return false}
		}
		else
			anchorobj.onclick=function(e){fmbubble.show(this, subobj, e); return false}
		if (this.hidedivmouseout[0]==true) //hide drop down DIV when mouse rolls out of it?
			subobj.onmouseout=function(e){fmbubble.hide(this, subobj, e)}
	}
}