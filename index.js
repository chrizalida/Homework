
    var intervalId;
    var minmax;
    var startid;
    var startval;
      function StartTimer(param) {
        StopTimer();
        startid =document.getElementsByClassName("start")[0].id; 
        startid =param;
        minmax = Math.abs((param-1)+30);
        startval=document.getElementById("view").value;
          if (startval==minmax) {
              startval=Math.abs(param);
              document.getElementById("view").value=startval;
          }
       
          if (startid<0) {
           startval ="-"+startval; 
          }

          intervalId = setInterval(incrementNum,500);
          

          function incrementNum(){
            if  (Math.abs(startval) != minmax){ 
                Math.abs(startval++);
                document.getElementById("view").value = Math.abs(startval);
            }else {
              clearInterval(intervalId);  
            }
          }

       }

      function StopTimer(){
        clearInterval(intervalId);  
      }
 
      function NullTimer(){
        StopTimer();      
        document.getElementById("view").value = Math.abs(startid);              
      }

      function ContinueTimer(){
        StopTimer();      
        StartTimer(startid);            
      }

