<script language="javascript">
<!-- Countup in Java Script .. Cameron Gregory http://www.bloke.com/
// permission to use and modify as long as you leave these 4 comment
// lines in tact and unmodified.
// http://www.bloke.com/javascript/Countup/
speed=1000;
len=40;
tid = 0;
num=0;
clockA = new Array();
timeA = new Array();
formatA = new Array();
dd = new Date();
var d,x;

function doDate(x)
{
  for (i=0;i<num;i++) {
    dt = new Date();
  
    if (timeA[i] != 0) {
      v1 = Math.round(( dt - timeA[i] )/1000) ;
      if (formatA[i] == 1)
        clockA[i].date.value = v1;
      else if (formatA[i] ==2) {
        sec = v1%60;
	v1 = Math.floor( v1/60);
	min = v1 %60 ;
	hour = Math.floor(v1 / 60);
	if (sec < 10 ) sec = "0"+sec;
	if (min < 10 ) min = "0"+min;
        clockA[i].date.value = hour+"h "+min+"m "+sec+"s";
        }
      else if (formatA[i] ==3) {
        sec = v1%60;
	v1 = Math.floor( v1/60);
	min = v1 %60 ;
	v1 = Math.floor(v1 / 60);
	hour = v1 %24 ;
	day = Math.floor(v1 / 24);
	if (sec < 10 ) sec = "0"+sec;
	if (min < 10 ) min = "0"+min;
	if (hour < 10 ) hour = "0"+hour;
        clockA[i].date.value = day+"d "+hour+"h "+min+"m "+sec+"s";
        }
      else if (formatA[i] ==4 ) {
        sec = v1%60;
	v1 = Math.floor( v1/60);
	min = v1 %60 ;
	v1 = Math.floor(v1 / 60);
	hour = v1 %24 ;
	day = Math.floor(v1 / 24);
        clockA[i].date.value = day+(day==1?"day ":"days ")+hour+(hour==1?"hour ":"hours ")+min+(min==1?"min ":"mins ")+sec+(sec==1?"sec ":"secs ")
        }
      else
        clockA[i].date.value = "Invalid Format spec";
      }
    else
      clockA[i].date.value = "Countup from when?";
    }

  tid=window.setTimeout("doDate()",speed);
}

function start(d,x,format) {
  clockA[num] = x
  if (d == "now")
    timeA[num] = new Date();
  else
    timeA[num] = new Date(d);
  formatA[num] = format;
//window.alert(timeA[num]+":"+d);
  if (num == 0)  
    tid=window.setTimeout("doDate()",speed);
  num++;
}

function CountupLong(t,format,len)
{
  document.write('<FORM name=form'+num+'><input name=date size=')
  document.write(len)
  document.write(' value="Countup: Requires Javascript"></FORM>')
  start(t,document.forms["form"+num],format);
}


function Countup(t)
{
  CountupLong(t,2,20);
}

// end-->
</script>
