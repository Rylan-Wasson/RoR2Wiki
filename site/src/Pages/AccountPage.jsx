import Subheader from "../components/Subheader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoggedIn } from "../util/LoggedInContext";


const AccountPage = () => {
    const email = localStorage.getItem('email')
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { setLoggedIn } = useLoggedIn();
    
    if (!email || !username || !token) {
        navigate("*")
    }

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        setLoggedIn(false);
        toast.success("Logged out!");
        navigate("/")
    }

    const handleDelete = async () => {
        try {
            const response = fetch('http://localhost:3000/api/delete-user', {
                method: 'DELETE',
                headers: {
                    'Authorization': token
                }
            }).then(response => {
                if(response.ok){
                    toast.success("Profile Deleted!");
                    localStorage.removeItem('email')
                    localStorage.removeItem('username')
                    localStorage.removeItem('token')
                    setLoggedIn(false);
                    navigate("/")
                } else {
                    toast.error("error deleting profile")
                }
            })


        } catch (error) {
            toast.error('Error Deleting Profile')
        }
    }


    
    return (
        <div>
            <Subheader title="Account"/>
            <div className="flex flex-col w-2/3 m-auto items-start py-6">
                <h2 className="text-2xl"><b>Email</b></h2>
                <h2 className="text-xl pb-3">{email}</h2>
                <h2 className="text-2xl"><b>Username</b></h2>
                <h2 className="text-xl pb-6">{username}</h2>
                <Subheader/>
                <button onClick={handleLogout} className="text-lg w-auto mb-5 text-yellow-100 bg-sky-900">Logout</button>
                <button onClick={handleDelete} className="text-lg text-red-500 bg-sky-900">Delete Account</button>
            </div>
        </div>
    );
}

export default AccountPage;