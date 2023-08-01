import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
    const clickToAdd = async (e) => {
        e.preventDefault()
        fetch('https://todo-api-lott.onrender.com/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nameOk: e.target.name.value,
                emailOk: e.target.email.value,
                passwordOk: e.target.password.value,
            })
        }).then(res => res.json())
            .then((d) => {
                if (d.data == "sended") {
                    e.target.reset()
                }
            }).catch(err => console.log('err::: ', err))
    }
    return (
        <>
            <div className="container-md w-50 card mt-3">
                <form onSubmit={ clickToAdd }>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input name='name' type="text" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input name='email' type="email" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input name='password' type="password" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary mb-3 w-100">Submit</button>
                </form>
                <Link to={ '/' }>
                    <button className='btn btn-secondary w-100'>Cancel</button>
                </Link>
            </div>
        </>
    )
}

export default Add