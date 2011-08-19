var myWidth = 0, myHeight = 0;
if( typeof( window.innerWidth ) == 'number' ) {
  //Non-IE
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
  //IE 6+ in 'standards compliant mode'
  myWidth = document.documentElement.clientWidth;
  myHeight = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
  //IE 4 compatible
  myWidth = document.body.clientWidth;
  myHeight = document.body.clientHeight;
}
var trueheight;
trueheight=myHeight;

var truewidth;
truewidth=myWidth;





function showFollowMe()
{
document.getElementById('FollowMeBubble').style.visibility='visible';
document.getElementById('FollowMeBubbleBG').style.visibility='visible';
document.getElementById("FollowMeBubbleBG").style.height = trueheight + "px";
document.getElementById("FollowMeBubbleBG").style.width = truewidth + "px";
}

function hideFollowMe()
{
document.getElementById('FollowMeBubble').style.visibility='hidden';
document.getElementById('FollowMeBubbleBG').style.visibility='hidden';
}

