"use client";

import { useState } from "react";

import Link from "next/link";



export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault();

        props.toggle();

        setUsername('');
        setPassword('');

    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label >
                        Username:
                    </label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <label >
                        Password:
                    </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <div className="confirm">
                        <button className="login-submit" type="submit">Login</button>
                        <p className="text-submit" > New Here? &nbsp; <Link href={"/register"}> Register </Link> </p>
                    </div>
                </form>
                <button className="close-button" onClick={props.toggle}>X</button>
            </div>
        </div>
    )
}



// import Link from "next/link";
// import Login from "@/components/Login.jsx";


// export default function userLogin() {
//     const [seen, setSeen] = useState(false)

//     function togglePop () {
//         setSeen(!seen);
//     };

//     return (
//         <div>
//             {/* <Link href={"/login"} onClick={togglePop}>Login</Link> */}
//             {seen ? <Login toggle={togglePop} /> : null}
//         </div>
//     )
// }


//router.push for the x closing




// "use client"

// import { useState } from "react";



// export default function Login(props) {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     function handleLogin(e) {
//         e.preventDefault()
//         console.log(username, password);
//         props.toggle()
//         console.log(typeof props.toggle);
//     }

//     return (
//         <div className="popup">
//             <div className="popup-inner">
//                 <h2>Login</h2>
//                 <form onSubmit={handleLogin}>
//                     <label>
//                         Username:
//                         <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
//                     </label>
//                     <label>
//                         Password:
//                         <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//                     </label>
//                     <button type="submit">Login</button>
//                 </form>
//                 <button onClick={props.toggle}>X</button>
//             </div>
//         </div>
//     )
// }