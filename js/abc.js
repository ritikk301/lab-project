function check_info()
{var first=document.getElementById("first").value;
 var last=document.getElementById('last').value;
 var dob=document.getElementById('dob').value;
 var email=document.getElementById('email').value;
 var username=document.getElementById('username').value;
 var pass=document.getElementById('pass').value;
 if(first==" " || last==" "|| dob==" "|| email==" " || username=" " || pass=" ")
 {alert('FILL IN THE FORM FIRST');
 return false;}
 else{document.getElementById("disable").disabled = false;
return true;}}