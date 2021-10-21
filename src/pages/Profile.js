import { useSelector } from "react-redux"
import { Redirect } from "react-router"


const Profile = () => {

    const user = useSelector(state => state.userPage)

    if (!user.success) return <Redirect to="/" />

    return (
        <div>
            <h1>{user.login}</h1>
        </div>
    )
}

export default Profile