import React from 'react'

function Register() {
    return (
        <main className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <div className="form-floating">
                    <input className="form-control" id="floatingInput" placeholder="First Name" />
                    <label for="floatingInput">First Name</label>
                </div>
                <div className="form-floating">
                    <input className="form-control" id="floatingInput" placeholder="Last Name" />
                    <label for="floatingInput">Last Name</label>
                </div>               
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password Confirm" />
                    <label for="floatingPassword">Password Confirm</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Register