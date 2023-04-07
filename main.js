const login=document.getElementById("loginpage");
const register=-document.getElementById("registerpage");
const post=document.getElementById("postpage");
if(login) login.addEventListener('submit',functionlogin)
if(register) register.addEventListener('submit',functionregister)
if(post) note.addEventListener('submit',functionpost)


function functionregister(e)
{
    e.preventDefault();
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;


class User{
    constructor(firstname,lastname,email)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
    }
    getFirstName(){
      return this.firstname;
    }
    getLastName()
    {
        return this.lastname;
    }
    getEmail()
    {
        return this.email;
    }
    setFirstName(firstname)
   {
    this.firstname=firstname;
   }
    setLastName(lastname)
    {
        this.lastname=lastname;
    }
    setEmail(email)
    {
        this.email=email;
    }
}
    const p1=new User(firstname,lastname,email,password);
    console.log(p1);
}

function functionlogin(e)
{
    e.preventDefault()

    let email=document.getElementById("username").value;
    let password=document.getElementById("password").value;
   
    class User{
        constructor(email,password)
        {
           
            this.email=email;
            this.password=password;
        }

        getemail()
    {
        return this.email;
    }
    getpassword()
    {
        return this.password;
    }
    setemail(email)
    {
        this.emailame=email;
    }
    setpassword(password)
    {
        this.password=password;
    }
       }
   
    const user1=new User(email,password);
    console.log(user1);
}

function functionpost(e)
{
    e.preventDefault()
   
    let post=document.getElementById('post').value;
   
   
    class User{
        constructor(note)
        {
           
            this.post=post;
           
        }
        getpost(){
            return this.post;
        }
        setpost(newpost){
            this.post = newpost;
        }
    }

    const user1=new User(post);
    console.log(user1);
}
