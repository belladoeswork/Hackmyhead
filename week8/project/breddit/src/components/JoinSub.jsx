// "use client";

// import { fetchUser } from '@/lib/fetchUser';

// export default function JoinSub({ subredditId }) {

//     const subscribe = async () => {
//       const response = await fetch('/api/subscribe', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ subredditId, userId: user.id }),
//       });
  
//       if (response.ok) {
//         // Handle successful subscription
//       } else {
//         // Handle error
//       }
//     };
  
//     return (
//       <button className="join-bttn" onClick={subscribe}>Join</button>
//     );
// }


// joinsub.jsx
import { fetchUser } from '@/lib/fetchUser'; // Import the fetchUser function

export default function JoinSub({ subredditId }) {
  const [user, setUser] = useState(null); // Initialize user state

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await fetchUser(); // Fetch the user
      setUser(fetchedUser); // Set the user state
    };

    getUser();
  }, []);

  const subscribe = async () => {
    if (!user) {
      // Handle the case where there is no user
      return;
    }

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subredditId, userId: user.id }),
    });

    if (response.ok) {
      // Handle successful subscription
    } else {
      // Handle error
    }
  };

  return (
    <button className="join-bttn" onClick={subscribe}>Join</button>
  );
}