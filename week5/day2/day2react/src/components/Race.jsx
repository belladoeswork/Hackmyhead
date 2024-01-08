import Divider from '@/components/Divider.jsx';
import { useState, useEffect} from 'react';

export default function race() {

    const [carPosition, setCarPosition] = useState(0);

    const handleKeyDown = (e) => {
        e.preventDefault();

    
        if (e.key === 'ArrowRight') {
          setCarPosition((carPosition) => carPosition + 5);
        } else if (e.key === 'ArrowLeft' && carPosition > 0) {
            setCarPosition((carPosition) => carPosition - 5);
          }
      };

      useEffect(() => {
        // window.addEventListener('keydown', handleKeyDown);
    
        // return () => {
        //   window.removeEventListener('keydown', handleKeyDown);
        // };
        const carDiv = document.getElementById('carDiv');

        if (carDiv) {
          carDiv.addEventListener('keydown', handleKeyDown);
        }
        return () => {
          if (carDiv) {
            carDiv.removeEventListener('keydown', handleKeyDown);
          }
        };

    }, []);
    
    return (
        <div>
            <h2>Race</h2>
            <p className='note'>Move car to the right by pressing the right arrow</p>
            <div className='carDiv' tabIndex="0" onKeyDown={handleKeyDown} style={{marginLeft: `${carPosition}px`, outline: 'none' }}  >
                <p  className='race' >🏎️</p>
            </div>
            <Divider />
        </div>
    );
}