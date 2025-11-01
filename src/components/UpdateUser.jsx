import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user =useLoaderData();
    console.log(user)

    const handleUpdateUser = (e) =>{
        e.preventDefault();
        const name =e.target.name.value;
        const email =e.target.email.value;
        console.log(name,email)
        const updatedUser = {name ,email}

        // send to the server 
        fetch()
        .then(res =>res.json())
        .then(data =>{
            console.log('After update',data)
        })

    }

    return (
        <div>
            <h2>Edit a user</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" defaultValue={user.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={user.email}/>
                <br />
                <input type="submit" value="Update a user" />
            </form>
        </div>
    );
};

export default UpdateUser;