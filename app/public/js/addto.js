var input = document.querySelector("#Textname");
         var invie = "";
         var but = document.querySelector("#btnname");
         var reg = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1}\.[0-9]{1}$/;
         but.onclick = function(){
         if(reg.test(input.value)){
             alert("验证通过");
             invie=input.value;
            }else{
            alert("验证失败");
            return false;
            // document.getElementById("region").value="";
         }
         
     }