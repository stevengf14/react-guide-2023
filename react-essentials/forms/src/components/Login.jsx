export default function Login() {
  function handleSubmtit(event) {
    event.preventDefault();
    console.log("Submitted");
  }
  return (
    <form onSubmit={handleSubmtit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmtit}>
          Login
        </button>
      </p>
    </form>
  );
}
