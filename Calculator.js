function fun0()
    {
        var x= document.getElementById("zero").value;
        document.getElementById("textbox").value += x;
    }
function fun1()
    {
        var x = document.getElementById("one").value;
        document.getElementById("textbox").value += x;
    }
function fun2()
    {
        var t= document.getElementById("two").value;
        document.getElementById("textbox").value += t;
    }
function fun3()
    {
        var h= document.getElementById("three").value;
        document.getElementById("textbox").value += h;
    }
function fun4()
    {
        var x = document.getElementById("four").value;
        document.getElementById("textbox").value += x;
    }
function fun5()
    {
        var x = document.getElementById("five").value;
        document.getElementById("textbox").value += x;
    }
function fun6()
    {
        var x = document.getElementById("six").value;
        document.getElementById("textbox").value += x;
    }
 function fun7()
    {
        var x= document.getElementById("seven").value;
        document.getElementById("textbox").value += x;
    }
function fun8()
    {
        var x= document.getElementById("eigth").value;
        document.getElementById("textbox").value += x;
    }
function fun9()
    {
        var x= document.getElementById("nine").value;
        document.getElementById("textbox").value += x;
    }
function fun10()
    {
        var s= document.getElementById("textbox").value;
        var l=s.split("");
        for(i=0;i<l.length;i++)
            {
                if(l[i]=="+" || l[i]=="-" || l[i]=="x" || l[i]=="/")
                    {
                        var d=i;
                        break;
                    }
            }
        var w=" ";
        for(i=0;i<d;i++)
        {
            w+=l[i];  
        }
        var y=parseFloat(w,10);
        var e="";
        for(i=d+1;i<l.length;i++)
        {
            e+=l[i];
        }
        var integer = parseFloat(e, 10);
        for(i=0;i<l.length;i++)
        {
            if(l[i]=="+")
            {
                var u=y+integer;
            }
            if(l[i]=="-")
            {
                var u=y-integer;
            }
            if(l[i]=="x")
            {
                var u=y*integer;
            }
            if(l[i]=="/")
            {
                var u=y/integer;
            }
        }
        document.getElementById("textbox").value=" "
        document.getElementById("textbox").value=u;

    }
function fun11()
    {
    var x= document.getElementById("point").value;
    document.getElementById("textbox").value+=x;
    }
function fun12()
    {
        var x= document.getElementById("plus").value;
        document.getElementById("textbox").value += x;
    }
 function fun13()
    {
        var x= document.getElementById("minus").value;
        document.getElementById("textbox").value += x;
    }
function fun14()
    {
        var x= document.getElementById("multiply").value;
        document.getElementById("textbox").value += x;
    }
function fun15()
    {
        var x= document.getElementById("divide").value;
        document.getElementById("textbox").value += x;
    }

function fun16()
    {
        var x= document.getElementById("textbox").value;
        var z= parseInt(x,10);
        var f= Math.sqrt(z);
        document.getElementById("textbox").value=f
    }
function fun17()
    {
        var x= document.getElementById("textbox").value;
        var z= parseInt(x,10);
        var f= Math.cbrt(z);
        document.getElementById("textbox").value=f
    }
function fun18()
    {
        var x= document.getElementById("textbox").value;
        document.getElementById("textbox").value=x*100;
    }
function fun19()
    {
        var x= document.getElementById("textbox").value;
        var z= parseInt(x,10);
        document.getElementById("textbox").value=Math.pow(z,2);
    }
function fun20()
    {
        var x= document.getElementById("textbox").value;
        var z= parseInt(x,10);
        document.getElementById("textbox").value=Math.pow(z,3);
    }
function fun21()
    {
        document.getElementById("textbox").value=Math.PI;
    }
function fun22()
    {
        document.getElementById("textbox").value=" ";
        document.getElementById("degree").checked=false;
        document.getElementById("radian").checked=false;  
        
    }
function fun23()
    {
        var len=document.getElementById("textbox").value;
        var w=len.length;
        var men=len.slice(0,len.length-1);
        document.getElementById("textbox").value = men;   
    }
function fun24()
    {
        if(document.getElementById('degree').checked)
        {
            var x= document.getElementById("textbox").value;
            document.getElementById("textbox").value=Math.sin(x * Math.PI / 180);
        }
        else
        {
            var x= document.getElementById("textbox").value;
            document.getElementById("textbox").value=Math.sin(x)
        }
    }
 function fun25()
    {
        if(document.getElementById('degree').checked)
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.cos(x * Math.PI / 180);
            }
        else
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.cos(x)
            }
    }
function fun26()
    {
        if(document.getElementById('degree').checked)
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.tan(x * Math.PI / 180);
            }
        else
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.tan(x)
            }
    }
function fun27()
    {
        if(document.getElementById('degree').checked)
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.asin(x )*  (180/Math.PI);
            }
        else
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.asin(x)
            }
    }
function fun28()
    {
        if(document.getElementById('degree').checked)
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.acos(x )* (180/Math.PI);
            }
        else
            {
                var x= document.getElementById("textbox").value;
                 document.getElementById("textbox").value=Math.acos(x)
            }
    }
function fun29()
    {
        if(document.getElementById('degree').checked)
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.atan(x )* (180/Math.PI);
            }
        else
            {
                var x= document.getElementById("textbox").value;
                document.getElementById("textbox").value=Math.atan(x)
            }
    }
