import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Helysson", "Pedro", "Adriano"])
    const [users, setUsers] = useState([
        { id: 1, name: "Helysson", age: 22 },
        { id: 2, name: "Pedro", age: 25 },
        { id: 3, name: "Adriano", age: 21 },
    ])
    return (
        <div>
            {/*Render sem Key*/}
            <ul>
                {list.map((item, i,{/*metodo i é utilizado mas não recomendado*/}) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            {/*Render com Key*/}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender