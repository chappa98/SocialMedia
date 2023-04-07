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
    const p1=new User("saikumar","Chappa","chappasaikumar6@gmail.com");
    console.log(p1);
