function validateForm()
   {
     let x = document.forms["MYFORMS"]["FNAME"].value;
     if(x=="")
     {
       alert("Name must be filled");
       return false;
     }
     let x3 = document.forms["MYFORMS"]["FMAIL"].value;
     if(x3=="")
     {
       alert("Email address must be filled");
       return false;
     }
     var re1 =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
     if(!re1.test(x3))
     {
       alert("Enter valid mail id");
       return false;
     }
     let x5 = document.forms["MYFORMS"]["FWORD"].value;
     if(x5=="")
     {
       alert("Password must be filled");
       return false;
     }
     if(x5.length < 6 || x5.length > 21)
	 {
		alert("Password min length 6 and max length is 20.");
        return false;
	}
   }