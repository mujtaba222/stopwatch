 var displaymin=document.getElementById('displaymin')
 var displaysec=document.getElementById('displaysec')
 var displaymillisec=document.getElementById('displaymillisec')

 var min=0;
 var sec=0;
 var millisec=0;
 var interval;



 function timer(){
     millisec++;
    if(millisec== 10){
         millisec=0;
         sec++;
         if(sec==60){
             sec=0
             min++
         }
     }
     displaymillisec.innerHTML=millisec
     displaysec.innerHTML=sec
     displaymin.innerHTML=min
 }
 function starttimer(){
     interval=setInterval(function(){
         timer()},100
     )
 }
 function pausetimer(){
     clearInterval(interval)
 }

 function resettimer(){
     pausetimer()
     millisec=0
     sec=0
     min=0
     displaymillisec.innerHTML=millisec
     displaysec.innerHTML=sec
     displaymin.innerHTML=min
 }




