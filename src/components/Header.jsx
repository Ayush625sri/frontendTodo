import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";

const Header = () => {

  const {loading,setLoading,isAuthenticated,setIsAuthenticated} = useContext(Context)


  const logoutHandler = async (e)=>{
	setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials:true,
      })
      toast.success("Logged Out Successfully");
      setIsAuthenticated(false)
	  setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message)
      setIsAuthenticated(true)
	    setLoading(false)
		
    }

  };


	return (
		<nav className="header">
			<div className="">
				<h2>Todo App</h2>
			</div>
			<article>
				<Link to={"/"}>Home</Link>
				<Link to={"/profile"}>Profile</Link>

      {
        isAuthenticated ? <button disabled={loading} className='btn'onClick={logoutHandler}>Logout</button> : <Link to={"/login"}>Login</Link>
      }
			</article>
		</nav>
	);
};

export default Header;
