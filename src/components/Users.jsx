import React, { use, useState } from 'react';

const Users = ({ usersPromise }) => {

    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers)

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
        const newUser = { name, email }

        // save this user data to the database (via server)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log("after saving a user", data)
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers =[...users,newUser];
                    setUsers(newUsers);
                    alert("user added successfully")
                    e.target.reset()
                }

            })


    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="add User" />
                <br />
            </form>
            <p>-------------------------------------------</p>
            <div>
                {
                    users.map(user => <p
                        key={user._id}>
                        {user.name}
                        {user.email}
                        <button>x</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Users;
