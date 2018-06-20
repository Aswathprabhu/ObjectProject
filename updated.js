
            function phone(num){
                    this.num=num;
            }
            phone.prototype.call=function(){
	
                    var num3=inputnum(rec);
                    alert("Calling from "+this.num+ " to "+num3);
	
            }
            phone.prototype.msg=function(){
	
                    var num3=inputnum(rec);
                    var content=prompt("Enter the content");
                    alert("Messaging from "+this.num+ " to "+num3+" with content "+content);
	
            }
            smart.prototype=new phone();
                                
                    function smart(email){
                        this.email=email;
                    }   
                    smart.prototype.send=function()
                               {
                                    var rec=inputemail(getter);
                                    var subject=prompt("Enter the subject");
                                    var body=prompt("Enter the body");
                                    alert("Sending email from "+this.email+" to "+rec+" with subject "+subject+" and body "+body);
                                }
            andro.prototype=new smart();
            function andro(){}
                andro.prototype.GoogleDuo=function(num)
                {
                    var rec=inputnum(who);
                    alert("Video calling "+rec+" from "+num+" via Google Duo");
                }
            
            ipho.prototype=new smart();
            function ipho(){}
                ipho.prototype.Facetime=function(num)
                {
                      var rec=inputnum(who);
                      alert("Video calling "+rec+" from "+num+" via Facetime");
                }
            
            windo.prototype=new smart();
            function windo(){}
                windo.prototype.Skype=function(num){
                      var rec=inputnum(who);
                      alert("Video calling "+rec+" from "+num+" via Skype");
                }
           
            
	                            function single(){
                	                var num=inputnum(user);
                	                sobj=new phone(num);
                	                var array=[];
                                    array.push("call");
                                    array.push("msg");
                                    createbutton(array,"sobj");
            	                }
                            	function dual(){
                            		
                                    var num1=inputnum(sims1);
                                    var num2=inputnum(sims2);
                                    var num;
                                    var array=[];
                                    array.push("call");
                                    array.push("msg");
                                    createbutton(array,"dobj",num1,num2);
                                    dobj=new phone();
                                    dobj.call=function(num1,num2)
                                    {
                                         var str=prompt("Your choice of SIM?");
                                         num=(str.toLowerCase()==="sim1")?num1:num2;
                                         var num3=inputnum(rec);
                                         alert("Calling from "+num+ " to "+num3);
                                    }
                                   
                                    
                                    dobj.msg=function(num1,num2)
                                    {
                                         var str=prompt("Your choice of SIM?");
                                         num=(str.toLowerCase()==="sim1")?num1:num2;
                                         var num3=inputnum(msgs);
                                         var content=prompt("Enter the content");
                                         alert("Messaging from "+num+ " to "+num3+" with content "+content);
                                    }

                            	}
                             

                                function android(){
                                    var email=inputemail(emails)
                                    var num=inputnum(user);
                                    aobj=new andro();
                                    aobj.email=email;
                                    var array=[];
                                    array.push("call");
                                    array.push("msg");
                                    array.push("send");
                                    array.push("GoogleDuo");
                                    createbutton(array,"aobj",num);
                                    }
                            	
                            	function iphone(){
                            	    var email=inputemail(emails)
                                    var num=inputnum(user);
                                    iobj=new ipho();
                                    iobj.email=email;
                                    var array=[];
                                    array.push("call");
                                    array.push("msg");
                                    array.push("send");
                                    array.push("Facetime");
                                    createbutton(array,"iobj",num);

                               }
                            	function windows(){

                            		 var email=inputemail(emails)
                                     var num=inputnum(user);
                                     wobj=new windo();
                                     wobj.email=email;
                                     var array=[];
                                     array.push("call");
                                     array.push("msg");
                                     array.push("send");
                                     array.push("Skype");
                            	     createbutton(array,"wobj",num);
                              }
                                function createbutton(array,str,num,num2)
                              {
                                    var mydiv=document.getElementById("content");
                                    document.getElementById("head").innerHTML="<h1>Supported Operations</h1>";
                                    for(var i=0;i<array.length;i++)
                                    {
                                            var button=document.createElement("button");
                                            button.value=array[i];
                                            if(str!=="dobj")
                                            button.setAttribute("onclick",""+str+"."+array[i]+"("+num+")");
                                            else
                                            button.setAttribute("onclick",""+str+"."+array[i]+"("+num+","+num2+")");
                                            button.appendChild(document.createTextNode(array[i].toUpperCase()));
                                            button.style.fontSize="20px";
                                            var mybr = document.createElement('br');
                                            mydiv.appendChild(mybr);
                                            mydiv.appendChild(button);

                                    }
                               }

                                function numvalid(num)
                                {
                                  var re=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                                  return re.test(num.toLowerCase());
                                }
                                function emailvalid(email)
                                {
                                    var re=/\S+@\S+\.\S+/;
                                    return re.test(email);
                                }
                                function inputnum(str)
                                {
                                      var flag=false,num;
                                      while(flag===false)
                                           {
                                            num=prompt(str);
                                            flag=numvalid(num);
                                            if(flag===false)
                                            alert("Enter a valid Phone number");
                                     }
                                     return num;
                                }
                                function inputemail(str)
                                {

                                     var flag=false,email;
                                      while(flag===false)
                                           {
                                            email=prompt(str);
                                            flag=emailvalid(email);
                                            if(flag===false)
                                            alert("Enter a valid Email-id");
                                     }
                                     return email;
                                }

var sobj,dobj={},aobj,iobj,wobj,smaobj;
var rec="Enter the number to which you want to call?";
var user="Enter your number";
var sims1="Enter your SIM1 number";
var sims2="Enter your SIM2 number";
var msgs="Enter the number to which you want to message?";
var emails="Enter your Email-Id";
var who="Who you want to call";
var getter="Enter the recipient";