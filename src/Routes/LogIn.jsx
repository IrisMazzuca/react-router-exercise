import React, { useState } from 'react'

const LogIn = ({ action, message, loggedIn }) => {
    const [classname, setClassname] = useState("alert alert-warning")

    const alertChangeColor = () => {

        (classname === "alert alert-warning")
            ? setClassname("alert alert-success")
            : setClassname("alert alert-warning")
    }

    return (
        <div>
            <h1 style={{ color: "orange" }}>LOGIN</h1>
            <hr />
            <h3>Are you Logged In?</h3>
            <p>Please login to access your account</p>

            <p className={classname}>{message}</p>

            <input
                type="checkbox"
                name="checkbox"
                checked={loggedIn}
                onChange={(e) => {
                    action(e)
                    alertChangeColor()
                }} />
            <label className="mx-2"> Check to login</label>


        </div>
    )
}

export default LogIn