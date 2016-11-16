window.onload = function(){
    
    
              
      $('#lookup').click(function(){
          if(document.getElementById('all').checked == true){
              console.log('all checked');
              var httpRequest1;  
       
       
          if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
              httpRequest1 = new XMLHttpRequest();
               
           }
           httpRequest1.onreadystatechange = function(){
             
               if (httpRequest1.readyState === XMLHttpRequest.DONE) {
                   if (httpRequest1.status === 200) {
                       
                       document.getElementById("result").innerHTML = (httpRequest1.responseText);
                      
               }
               else{
                   alert("nooooooooo!");
               }
               
           };
        };
          var url= 'https://the-world-jhenai.c9users.io/world.php?all=true';
          httpRequest1.open('GET', url);
          httpRequest1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          httpRequest1.send(null);
      }
      else{
  
      
        var httpRequest;  
        var country= document.getElementById("country").value;
       
          if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
              httpRequest = new XMLHttpRequest();
               
           }
           httpRequest.onreadystatechange = function(){
             
               if (httpRequest.readyState === XMLHttpRequest.DONE) {
                   if (httpRequest.status === 200) {
                       document.getElementById("result").innerHTML = (httpRequest.responseText);
                      
               }
               else{
                   alert("nooooooooo!");
               }
               
           };
        };
          console.log('country entered');
          var url1=  'https://the-world-jhenai.c9users.io/world.php?country=' + country;
          httpRequest.open('GET', url1, true);
          httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          httpRequest.send(null);
    
      }
        });
    
          
          
   
}