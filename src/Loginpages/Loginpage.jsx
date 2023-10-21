import React, { useState } from 'react'
import "./Loginpage.css";
import Navbar from '../Pages/Navbar';
import Education_login_pic from "../assets/Education_login.png";
import Contactpage from '../Pages/FooterPage';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';


function Loginpage() {
    const navigate = useNavigate();
    const [signUp, setSignup] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [LoggedIn, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
    })


    console.log({ name, email, password });

    const handleLogin = async (ev) => {
        // if (name == "") {
        //     setErrors({ ...errors, name: true });
        // }
        // if (email == "") {
        //     setErrors({ ...errors, email: true });
        // }
        // if(password==""){
        //     setErrors({ ...errors, password: true })
        // }

        await fetch(`http://localhost:5000/${signUp ? "signup" : "login"}`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ name, email, password }),

        }).then((res) => {

            if (res.ok) {
                setLoggedIn(true);
                if (signUp) {
                    toast.success("Signed Up successfully");
                    setSignup(false);
                }
                else {
                    toast.success("Congrats Logged in successfully ");
                    navigate("/");
                }
                setName("");
                setEmail("");
                setPassword("");
            }
            else {
                setLoggedIn(false);
                toast.error("Try Again to Login or check your credentials ")
            }

        }).catch((err) => {
            toast.error("Logged  failed");
            console.log(err.message);
        });

    }


    return (
        <div className='loginpage'>
            <Toaster position='top-center' reverseOrder={true} />
            <Navbar />
            <header className='login_header'>
                <h1 className='login_header_title'>
                    Login
                </h1>
                <span className='login_header_sub_title'>
                    Home/<span className='login_header_sub_sub_title'>
                        Login
                    </span>
                </span>
            </header>
            <section className='login_main'>
                <div className='login_main_left'>
                    <img src={Education_login_pic} width="500px" height={"500px"} alt="login_page_backdrop" />

                </div>
                <div className='login_main_right'>

                    <form className='login_form' aria-autocomplete='off' autoComplete='off'>
                        <h1 className='login_form_title'>{signUp ? "SignUp to Explore " : "Log in to your Account"}</h1>
                        <p className='login_form_sub_title'>{signUp ? "Please enter required credentials" : "Welcome back! Please enter your details"}</p>

                        {
                            signUp ? (<>
                                <label className='login_label'>Name</label>
                                <input type='text' className='login_inputs' placeholder=' ✉ Name' value={name} autoComplete='Off' onChange={(e) => setName(e.target.value)} />
                                {errors.name && (
                                    <>
                                        <span style={{ color: "red", marginBottom: "2px" }}>Name is required !</span>

                                    </>
                                )}
                            </>) : ""
                        }
                        <label className='login_label'>Email</label>
                        <input type='text' className='login_inputs' placeholder='  ✉ Example@gmail.com' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && (
                            <>
                                <span style={{ color: "red", marginBottom: "2px" }}>Email is required !</span>

                            </>
                        )}
                        <label className='login_label'>Password</label>
                        <input type='password' placeholder=' 🔐 Example@12345' autoComplete='off' className='login_inputs login_password_input' value={password} onChange={(e) => setPassword(e.target.value)} />

                        {errors.password && (
                            <>
                                <span style={{ color: "red", marginBottom: "2px" }}>Password is required !</span>

                            </>
                        )}
                        {
                            !signUp ? (<span className='forgot_password' >Forgot Password?</span>) : ""

                        }
                        <span className='Login_button' id='button' onClick={(ev) => handleLogin(ev)} >{signUp ? ("Sign Up") : "Login"}</span>

                        <div className='other_sign_up_options'>
                            <span className='Login_with_google'>Or,Sign up with Google</span>
                            <div className='sing_up_buttons'>
                                <button className='google_login' id='button'>Google</button>
                                <button className='fb_login' id='button'>Facebook</button>
                            </div>

                        </div>


                    </form>
                    <div className='new_account'>
                        {signUp ? "Already have an account?" : "Don't have an account?"} <span className='create_new' onClick={() => setSignup(p => !p)} style={{ color: "coral", cursor: "pointer" }}>{signUp ? "Login" : "Create an account"}</span>
                    </div>

                </div>
            </section>
            <Contactpage />
        </div>
    )
}

export default Loginpage