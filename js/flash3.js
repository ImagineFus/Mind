<script language="javascript">
<!-- Countup in Java Script .. Cameron Gregory http://www.bloke.com/
// permission to use and modify as long as you leave these 4 comment
// lines in tact and unmodified.
// http://www.bloke.com/javascript/Countup/
// Code Begins
// Note: Code modified by Peter J. Camiel, III, B.S.
// Date Modified: Monday, 15 July, 2002
// http://www.aqatech.us
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
      else if (formatA[i] == 2) {
        sec = v1%60;
	v1 = Math.floor( v1/60);
	min = v1 %60 ;
	hour = Math.floor(v1 / 60);
	if (sec < 10 ) sec = "0" + sec;
	if (min < 10 ) min = "0" + min;
        clockA[i].date.value = hour + "h " + min + "m " + sec + "s";
        }
      else if (formatA[i] == 3) {
        sec = v1%60;
	v1 = Math.floor( v1/60);
	min = v1 %60 ;
	v1 = Math.floor(v1 / 60);
	hour = v1 %24 ;
	day = Math.floor(v1 / 24);
	if (sec < 10 ) sec = "0" + sec;
	if (min < 10 ) min = "0" + min;
	if (hour < 10 ) hour = "0" + hour;
        clockA[i].date.value = day + "d " + hour + "h " + min + "m " + sec + "s";
        }
      else if (formatA[i] == 4 ) {
        sec = v1%60;
	v1 = Math.floor( v1/60);
	min = v1 %60 ;
	v1 = Math.floor(v1 / 60);
	hour = v1 %24 ;
	day = Math.floor(v1 / 24);
        clockA[i].date.value = day + (day==1?" day, ":" days, ") + hour + (hour==1?" hour, ":" hours, ") + min + (min==1?" min, ":" mins, ") + sec + (sec==1?" sec":" secs")
        }
      else if (formatA[i] == 5 ) {
        sec = v1%60;
	v1 = Math.floor( v1/60);
	min = v1 %60 ;
	v1 = Math.floor(v1 / 60);
	hour = v1 %24 ;
	day = Math.floor(v1 / 24);
	weeka = (v1 / 24 / 7);
	weekb = Math.floor(weeka);
	if (weeka >= (weekb + (6/7))) {
	day=6}
	else if (weeka >= (weekb + (5/7))) {
	day=5}
	else if (weeka >= (weekb + (4/7))) {
	day=4}
	else if (weeka >= (weekb + (3/7))) {
	day=3}
	else if (weeka >= (weekb + (2/7))) {
	day=2}
	else if (weeka >= (weekb + (1/7))) {
	day=1}
	else {
	day=0};
	        clockA[i].date.value = weekb+(weekb==1?" week, ":" weeks, ")+day+(day==1?" day, ":" days, ")+hour+(hour==1?" hour, ":" hours, ")+min+(min==1?" min, ":" mins, ")+sec+(sec==1?" sec":" secs")
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

<!-- 
Add the following inside your document: 
<script language="javascript">
Countup();
</script>

Or you can sepcify some other date: 
<script language="javascript">
  // when I was born .. 
  Countup("July 08, 1969 06:15:00");
</script>


Modify the above argument, to be the Time of your choice. 
Or the time on the current page. 
  //CountupLong(dateString,format,length);
  CountupLong("now",2,10);


Or you can go out on a limb with: 
  //CountupLong(dateString,format,length);
  CountupLong("July 08, 1969 00:00:00",4,35);


format=1: 000000 (just the raw number of seconds) 
format=2: 00h 00m 00s 
format=3: 000d 00h 00m 00s 
format=4: 000day(s) 00hour(s) 00min(s) 00sec(s) 
format=5: 000week(s) 000day(s) 00hour(s) 00min(s) 00sec(s)

-->



