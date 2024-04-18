import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useLoggedIn } from '../util/LoggedInContext';


const formSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" })
});

const LoginForm = () => {
    const { setLoggedIn } = useLoggedIn();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
        });
        const navigate = useNavigate();

        const[isLoading, setIsLoading] = useState(false);

        const onSubmit = data => {
        setIsLoading(true);
        
        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
            throw new Error("Network response was not ok"); 
            }
            return response.json(); 
        })
        .then(data => {
            setLoggedIn(true);
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.user.username);
            localStorage.setItem("email", data.user.email)
            toast.success("Login successful");
            navigate("/")
        })
        .catch(error => {
            toast.error(error.message || "An error occurred during login");
        })
        .finally(() => setIsLoading(false));
        };

        useEffect(() => {
        const errorKeys = Object.keys(errors);
        errorKeys.forEach((key, index) => {
            setTimeout(() => {
            toast.error(errors[key].message);
            }, (index + 1) * 1000);
        });
        }, [errors]);

        return (
        <>
            <div className="flex flex-col items-center justify-center">
            <form className="w-1/3 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col p-4 pb-0">
                    <label htmlFor="email" className='text-2xl font-medium mb-1'>Email</label>
                    <input
                        className='mb-4 p-2 text-black bg-white rounded'
                        id="email"
                        type="text"
                        placeholder="name@abc.com"
                        {...register("email")}
                    />
                    <label htmlFor="psw" className='text-2xl font-medium mb-1'>Password</label>
                    <input
                        className='mb-4 p-2 text-black bg-white rounded'
                        id="psw"
                        type="password"
                        placeholder="8+ characters"
                        {...register("password")}
                    />
                </div>
                {isLoading ? (
                    <button className='mb-4 text-yellow-100 bg-sky-900'>Loading...</button>
                ) : (
                    <button className='mb-4 text-yellow-100 bg-sky-900'>Login</button>
                )}
                <div>
                    <Link className='text-lg font-medium text-yellow-300' to="/signup">Create an Account</Link>
                </div>
            </form>
            </div>
        </>
        );
    };

    export default LoginForm;