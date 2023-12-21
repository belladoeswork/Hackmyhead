
"use client";

import { useState } from "react";
import Link from "next/link";



export default function Register(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleRegister(e) {
        e.preventDefault();

        props.toggle();

        setUsername('');
        setPassword('');

    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <label >
                        Username:
                    </label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <label >
                        Password:
                    </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <div className="confirm">
                      <button className="reg-submit"  type="submit">Create Account</button>
                      <p className="text-submit" > Already have an account? &nbsp; <Link href={"/login"}> Log In </Link> </p>
                    </div>
                </form>
                <button className="close-button" onClick={props.toggle}>X</button>
            </div>
        </div>
    )
}


// "use client"; 



// import { useState } from "react";
// import { useRouter } from "next/navigation.js";



// export default function Register() {


//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isModalOpen, setModalOpen] = useState(false);

//   const router = useRouter();

//   async function handleRegister(e) {
//     e.preventDefault();

//     const res = await fetch("/api/users/register", {
//         method: "POST",
//         headers: {"Content-Type": "application/json", },
//         body: JSON.stringify({ username, password }),
//     });

//     const info = await res.json();

//     if (info.error) {
//       return setError(info.error);
//     } else {
//       setModalOpen(false);
//       router.push("/");
//       router.refresh();
//     }
//   };


//   return (
//     <div className="popup">
//         <div className="popup-inner">
//             <form onSubmit={handleRegister}>
//                 <label >
//                   Username:
//                 </label>
//                 <input onChange={(e) => setUsername(e.target.value)} value={username}/>
//                 <label >
//                   Password:
//                 </label>
//                 <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
//                 <button type="submit">Register</button> 
//             </form>
//             {/* <button className="close-button" onClick={handleClose}>X</button> */}
//             <button  className="close-button" onClick={() => setModalOpen(false)}>X</button>
//         </div>
//     </div>
//   );
// }

// // del type on button?

// import React, { useState } from "react";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

// export default function Register(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isModalOpen, setModalOpen] = useState(false);

//   const router = useRouter();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/api/users/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     const info = await res.json();

//     if (info.error) {
//       setError(info.error);
//     } else {
//       setModalOpen(false);
//       router.push("/");
//       router.refresh();
//     }
//   };

//   return (
//     <>
//       <Button onClick={() => setModalOpen(true)}>Create Account</Button>

//       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
//         <ModalContent>
//           <ModalBody>
//             <form onSubmit={handleRegister}>
//               <label>
//                 Username:
//                 <input onChange={(e) => setUsername(e.target.value)} value={username} />
//               </label>
//               <label>
//                 Password:
//                 <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
//               </label>
//               <Button type="submit" >Register</Button>
//             </form>
//           </ModalBody>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <ModalFooter>
//             <Button color="secondary" variant="light" onClick={() => setModalOpen(false)}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }


