import React from "react";
import '../Users/Users.scss';

function Users() {

   const users = [
        {
            id: 1,
            fisrtname: 'Bob',
            lastname: 'Marley',
            bio:'Lorem ispum dolor sit amet consectetur, adipisicing elit.',
            age: 30,
            isHappy: true

        },
        {
            id: 2,
            fisrtname: 'Ihor',
            lastname: 'Skakalskiy',
            bio:'Lorem ispum dolor sit amet consectetur, adipisicing elit.',
            age: 21,
            isHappy: false
        }
    ]
     
    return(
        <div className="users">
            {users.map((item)=> (<div>
                <h3 className="users__title">{item.fisrtname} {item.lastname}</h3>
                <p className="user__text">{item.bio}</p>
            </div>))}
        </div>
    )

}

export default Users;