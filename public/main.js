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
// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  } 