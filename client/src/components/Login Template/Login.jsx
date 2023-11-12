import './login.css'

export default function Login(){


    return(

        <main className="login">
        <div className="login-container">
          <form className="login-form" action method="POST">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="example@abv.bg" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password.." />
            <div className="submitBtn">
              <input type="button" defaultValue="SIGN UP" />
            </div>
            <div className="existingAccount">
              <a href="javascript:void(0)">Don't have an account?</a>
              <a href="#" id="SignUp"> Sign Up</a>
            </div>
          </form></div>
      </main>

    );
}