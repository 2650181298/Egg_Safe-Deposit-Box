function checkForm(){
     var phone = document.getElementById('username').value;
     a = /^[a-zA-Z0-9]{8,16}$/;
     if ((phone).match(a)) {
          document.getElementById('user2').innerHTML = '√';
          document.getElementById('user2').style.color = 'rgb(0, 160, 85)';
     }
     else if((phone)==""){
          document.getElementById('user2').innerHTML = '不能为空';
          document.getElementById('user2').style.color = 'red'
          return false
	}else {
          document.getElementById('user2').innerHTML = '请输入8-16位用户名'
          document.getElementById('user2').style.color = 'red'
          phone = ""
          return false
     }


     var phone2 = document.getElementById('passwd').value;
     b = /^[a-zA-Z0-9]{6,12}$/;
     if ((phone2).match(b)) {
          document.getElementById('pass2').innerHTML = '√';
          document.getElementById('pass2').style.color = 'rgb(0, 160, 85)';
        document.getElementById('pass').innerHTML = '';
     }
     else if((phone2)==""){
          document.getElementById('pass').innerHTML = '不能为空';
          document.getElementById('pass').style.color = 'red'
        document.getElementById('pass2').innerHTML = '';
          return false
	}else {
          document.getElementById('pass2').innerHTML = '请输入6位数以上的密码'
          document.getElementById('pass').innerHTML = '';
          document.getElementById('pass2').style.color = 'red'
          phone2 = ""
          return false
     }
 }