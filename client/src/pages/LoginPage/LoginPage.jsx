import LoginButton from "../LoginButton/LoginButton"

const LoginPage = () => {
    return (
        <div className="bg-slate-300 w-full h-screen flex justify-center items-center flex-col">
            <h1 className="text-xl font-bold">Registration is a requirement</h1>
            <LoginButton />
        </div>
    )
}

export default LoginPage