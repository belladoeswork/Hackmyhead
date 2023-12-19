"use client";
import { useState } from "react";
import { useRouter } from "next/navigation.js";


export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();

    const res = await fetch("/api/users/register", {
        method: "POST",
        headers: {"Content-Type": "application/json", },
        body: JSON.stringify({ username, password }),
    });

    const info = await res.json();

    if (info.error) {
      return setError(info.error);
    }


    router.push("/");
    router.refresh();
    // props.toggle();

  }

  function handleClose() {
    props.toggle();
  }


  return (
    <div className="popup">
        <div className="popup-inner">
            <form onSubmit={handleRegister}>
                <label>
                    Username:
                    <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    />
                </label>
                <label>
                    Password:
                    <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    />
                </label>
                <button type="submit">Register</button> 
            </form>
            <button className="close-button" onClick={handleClose}>X</button>
        </div>
    </div>
  );
}

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


