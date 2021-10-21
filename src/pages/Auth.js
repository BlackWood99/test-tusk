import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import { authAC } from "../actions"


const Auth = ({ user, auth }) => {
    const history = useHistory()

    const [userVal, setUserVal] = useState({
        login: "",
        password: ""
    })
    const onChangeUserInfo = (e) => {
        setUserVal(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    useEffect(() => {
        if (userVal.login === user.login && userVal.password === user.password) {
            auth(true)
        } else {
            auth(false)
        }
    }, [userVal])

    const [success, setSuccess] = useState(user.success)
    useEffect(() => {
        setSuccess(user.success)
    }, [user.success])

    const onAuth = (e) => {
        e.preventDefault()

        history.push("/profile")
    }

    return (
        <div className="auth">
            <form>
                <input
                    type="text"
                    placeholder="Login"
                    name="login"
                    value={userVal.login}
                    onChange={e => onChangeUserInfo(e)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={userVal.password}
                    onChange={e => onChangeUserInfo(e)}
                />
                <button
                    type="submit"
                    onClick={e => onAuth(e)}
                    disabled={!success}
                >
                    Sign in
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return { auth: (isSuccess) => dispatch(authAC(isSuccess)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)