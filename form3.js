console.log("PROJECT FORMVALIDATION");
function validateform() {
        const name = document.getElementById('name');
        let p = document.forms["regform"]["password"].value;
        let p2 = document.forms["regform"]["password2"].value;
        var e = document.forms["regform"]["email"].value;
        var atposition  = e.indexOf("@");
	var main = document.getelementById('rqr').textContent;
        var dotposition = e.lastIndexOf(".");
        var num1 = document.forms["regform"]["phone"].value;
        var reg = new RegExp('^[0-9]+$');
        var resultnum = reg.test(num1);
        let c = document.forms["regform"]["course"].value;
        
        name.addEventListener('blur',()=> {
            console.log("name is blurred");
            let regex = /^[a-zA-Z]([a-zA-Z]){3,25}/;
            let str = name.value;
            console.log(regex, str);
            if(regex.test(str)) {
                console.log('Matched Successfully');
                name.classList.remove('is-invalid');
            }
            else {
                // alert("error");
                console.log('Matchmaking Unsuccessful');
                name.classList.add('is-invalid');
            }
        });

        if (e == "" || e == "") {
            alert("Please Enter Your Email Address");
            e.focus();
            return false;
         }
        else if (atposition <1 || dotposition<atposition+2 || dotposition+2>=e.length) {
            alert("Please Enter A Valid Email");
            e.focus();
            return false;
        }
        else if (p =="") {
            alert("Password can't be empty");
            p.focus();
            return false;
        }
        else if (p.length<6) {
            alert("paswword length must be more than 6");
            p.focus();
            return false;
        }
        else if (p != p2) {
            alert("Both Password Must Be Same");
            p2.focus();
            return false;
        }
        else if (num1 == "") {
            alert("Please enter Your Phone Number");
        }
        else if (resultnum != true) {
            alert("Phone number is not correct");
            num1.focus();
            return false;
        }
        else if (num1.length != "10") {
            alert("Please enter 10 digit in Phone");
        }
        else if (what.selectedIndex == -1) {
            alert("Please enter your course.");
					what.focus();
					return false;
        }

}
