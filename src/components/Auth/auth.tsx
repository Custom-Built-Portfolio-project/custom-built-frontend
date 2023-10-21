import { useAuth0 } from "@auth0/auth0-react"

const Auth: React.FC = () => {

    const { loginWithRedirect, logout, user, isLoading } = useAuth0()

    return (
        <div className="mt-5">
            {
                !isLoading && !user ? (
                    <button className="px-4 py-1 text-sm text-black font-semibold rounded-full border border-black hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2" onClick={() => loginWithRedirect({appState: {returnTo: `http://localhost:5173/`}})}>Ingresar</button>
                ) : (
                    <button className="px-4 py-1 text-sm text-black font-semibold rounded-full border border-black hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2" onClick={() => logout({logoutParams: {returnTo: `http://localhost:5173/`}}) }>Salir</button>
                )
            }
        </div>
    )
}

export default Auth