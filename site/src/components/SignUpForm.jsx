import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const signupSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email format" }).nonempty({ message: "Email is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Confirm Password must be at least 8 characters" })
});

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm({ 
    resolver: zodResolver (signupSchema)
  });

  const navigate = useNavigate();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    const errorKeys = Object.keys(errors);
    errorKeys.forEach((key, index) => {
      setTimeout(() => {
        toast.error(errors[key].message);
      }, (index + 1) * 1000);
    });
  }, [errors]);

  
  const onSubmit = async (data) => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
    try {
      // Set loading to true
      setIsLoading(true);
  
      console.log("Signup data:", data);

  
      fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          toast.success("Signup successful. Please login.");
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error.message || "An error occurred during signup");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      toast.error("An error occurred during signup. Please try again.");
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center">
       <form className="w-1/3 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col p-4">
          <label className='text-2xl font-medium mb-1' htmlFor="email">Email</label>
          <input id='email' className='mb-4 p-2 text-black bg-white rounded' type="text" placeholder="name@abc.com" {...register('email')} />

          <label className='text-2xl font-medium mb-1' htmlFor="username">Username</label>
          <input id='username' className='mb-4 p-2 text-black bg-white rounded' type="text" placeholder="Gamer-Tag45" {...register('username')} />

          <label className='text-2xl font-medium mb-1' htmlFor="password">Password</label>
          <input id='password' className='mb-4 p-2 text-black bg-white rounded'type="password" placeholder="8+ characters" {...register('password')} />

          <label className='text-2xl font-medium mb-1' htmlFor="confirmPassword">Confirm Password</label>
          <input id='confirmPassword' className='mb-4 p-2 text-black bg-white rounded' type="password" placeholder="Repeat your password" {...register('confirmPassword')} />
        </div>
        <button className='mb-4 text-yellow-100 bg-sky-900'>Sign up</button>

        <p className='text-lg'>Already have an account? <Link className='font-medium text-yellow-300' to="/login">Sign in</Link></p>
      </form>
    </div>
  );
};

export default SignupForm;