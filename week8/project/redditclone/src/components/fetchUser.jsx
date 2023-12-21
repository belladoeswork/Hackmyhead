// "use client"

// import { useState } from "react";



// export default function Login(props) {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     function handleLogin(e) {
//         e.preventDefault()
//         console.log(username, password);
//         props.toggle()
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
//                 <button className="close-button" onClick={props.toggle}>X</button>
//             </div>
//         </div>
//     )
// }

