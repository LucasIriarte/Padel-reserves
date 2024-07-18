import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../redux/usersActions"



const UserTable = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)
    
    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable