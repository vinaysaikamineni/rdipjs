function palin()
            {
                var str = document.getElementById("str1").value;
                var len = str.length;
                var mid = Math.floor(len/2);
                for ( var i = 0; i < mid; i++ ) {
                    if (str[i] !== str[len - 1 - i]) {
                       alert("False");
                        return false;
                        }
                    }
                alert("True");
                return true;
            }
function ana()
            {
                var str1 = document.getElementById("str1").value.toLowerCase().split('').sort().join('');
                str1= str1.trim();
                var str2 = document.getElementById("str2").value.toLowerCase().split('').sort().join('');
                str2 = str2.trim();
                if(str1 == str2)
                    {
                        alert("True");
                        //document.getElementById("ans").value="It is a Anagram";
                        return true;
                    }
                else{
                        //document.getElementById("ans").value="It is not a Anagram";
                        alert("False");
                    return false;
                }
            }
function game()
            {
                var g1 = parseInt(document.getElementById("str1").value);
                var g2 = parseInt(document.getElementById("str2").value);
                var str1 = eval(g1%3);
                var str2 = eval(g2%3);
                var mfun={'0':"Human",'1':"cockroach",'2':"nuclearbomb"}
                if( (str1 == 0 && str2 == 1) || (str1 == 1 && str2 == 0))
                    {
                        //alert("Human Survives");
                        document.getElementById("ans").value="Human Survives";
                        return true;
                    }
                else if(( str1 == 1 && str2 == 2 )||( str1 == 2 && str2 == 1 ))
                    {
                       // alert("Cockroach Survives");
                        document.getElementById("ans").value="Cockroach Survives";
                        return true;
                    }
                else if(( str1 == 0 && str2 == 2) ||( str1 == 2 && str2 == 0))
                    {
                        ///alert("Nuclear Bomb Survives");
                        document.getElementById("ans").value="Nuclear Bomb Survives";
                        return true;
                    }
                else if(str1 == str2)
                {
                    
                    document.getElementById("ans").innerHTML="ITS a TIE";
                    return true;
                }else{
                    return false;
                }
                
            }
function ran()
            {
                document.getElementById("str1").value = (Math.round(Math.random()*1000));
                document.getElementById("str2").value = (Math.round(Math.random()*1000));
            }
 function validate()
            {
                var name = document.getElementById("name").value;
                ///document.write(name);
                if(name[0].match(/^[0-9]+$/))
                {
                    alert("Name cannot start with DIgit :)");
                    return false;
                }
                var num = document.getElementById("phn").value;
                if(num.length!=10)
                    {
                        alert("Please check mobile number !!");
                        return false;
                    }
                var mail =document.getElementById("mail").value;
                if(mail.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/))
                    {
                        
                    }else{
                        alert("Check the email address !!!");
                        return false;
                    }
                document.write("Sucessfully submitted");
            } 
function add()
{
    var val = parseInt(document.getElementById("exp1").value);
    var val1 = parseInt(document.getElementById("exp2").value);
    
    document.getElementById("exp2").value="";
    document.getElementById("exp1").value="";
    return document.getElementById("exp").value=(val+val1);
}
function sub()
{
    var val = parseInt(document.getElementById("exp1").value);
    var val1 = parseInt(document.getElementById("exp2").value);
    
    document.getElementById("exp2").value="";
    document.getElementById("exp1").value="";
    return document.getElementById("exp").value=(val-val1);
}
function mul()
{
    var val = parseInt(document.getElementById("exp1").value);
    var val1 = parseInt(document.getElementById("exp2").value);
    
    document.getElementById("exp2").value="";
    document.getElementById("exp1").value="";
    return document.getElementById("exp").value=(val*val1);
}
function div()
{
    var val = parseInt(document.getElementById("exp1").value);
    var val1 = parseInt(document.getElementById("exp2").value);
    
    document.getElementById("exp2").value="";
    document.getElementById("exp1").value="";
    return document.getElementById("exp").value=(val/  val1);
}
function per()
{
    var val = parseInt(document.getElementById("exp1").value);
    var val1 = parseInt(document.getElementById("exp2").value);
    
    document.getElementById("exp2").value="";
    document.getElementById("exp1").value="";
    return document.getElementById("exp").value=(val/100)*val1;
}
function fclr()
            {
                document.getElementById("exp").value="";
                document.getElementById("exp2").value="";
    document.getElementById("exp1").value="";
            }
function abs()
            {
                
                 document.getElementById("exp1").value="";
                return document.getElementById("exp").value = Math.abs(parseInt(document.getElementById("exp1").value));
            }
function sqrt()
            {
               var val = document.getElementById("exp1").value;
                val = Math.pow(val,0.5);
                if(val == parseInt(val))
                {
                return document.getElementById("exp").value = val;
                }else{
                    val = val.toFixed(3);
                    return document.getElementById("exp").value = val;
                }
            }