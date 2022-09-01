import "./Login.css"

function Login() {
  return (
    <form id="signin">
        
     <select class="classic" >
  <option>Sponsor</option>
  <option>User</option>
   
</select>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" />
      </div>
      
      <div >
        <h4 className="for">Forgot Password</h4>
      </div>
       
      <button>Log In </button>
    </form>
  )
}

export default Login