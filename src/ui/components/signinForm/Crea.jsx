import "./Crea.css"

function Crea() {
  return (
    <form id="signin">
      <h1>Create Account</h1>
      <div>
        <label htmlFor="">First Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor=""> Password</label>
        <input type="password" />
      </div>
      <div>
        <label htmlFor="">  Confirm Password</label>
        <input type="password" />
      </div>
      <button>Create </button>
    </form>
  )
}

export default Crea