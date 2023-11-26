import Cow from './images/Untitled design.png';
import { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import Fence from './images/Untitled_design__2_-removebg-preview.png'
import Arrow from './images/44686.png'
import { Link } from 'react-router-dom';
import Cow2 from './images/Untitled design.png'
import Sheep from './images/1000_F_517515663_0kYRUCq7pks0ZIWfHAtyMcC3oWWQXDuE-removebg-preview.png'
import Chicken from './images/white-chicken-pixel-art-icon-country-bird-farm-animal-logo_418367-188-removebg-preview (1).png'

const TheFarm = () => {

    const [position, setPosition] = useState({ top: 400, left: 350 });
    const containerRef = useRef(null);

    useEffect(() => {
        const moveImage = () => {
            // Ensure containerRef.current is defined before accessing its properties
            if (containerRef.current) {
                // Calculate a random distance to move in both top and left directions
                const distanceX = Math.random() * 40 - 18; // Random value between -50 and 50
                const distanceY = Math.random() * 40 - 18; // Random value between -50 and 50

                // Get the dimensions of the container
                const containerWidth = containerRef.current.clientWidth || 0;
                const containerHeight = containerRef.current.clientHeight || 0;

                // Calculate the new position based on the random distances
                const newPosition = {
                    top: Math.min(Math.max(position.top + distanceY, 0), containerHeight),
                    left: Math.min(Math.max(position.left + distanceX, 0), containerWidth),
                };

                // Glide to the new position over 500 milliseconds
                const startTime = Date.now();
                const duration = 500; // milliseconds

                const animate = () => {
                    const currentTime = Date.now();
                    const elapsedTime = currentTime - startTime;

                    if (elapsedTime < duration) {
                        const progress = elapsedTime / duration;
                        const easedProgress = easeInOutQuad(progress);

                        setPosition({
                            top: position.top + (newPosition.top - position.top) * easedProgress,
                            left: position.left + (newPosition.left - position.left) * easedProgress,
                        });

                        requestAnimationFrame(animate);
                    } else {
                        setPosition(newPosition);
                    }
                };

                animate();
            }
        };

        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        // Set up intervals for moving and pausing
        const moveInterval = setInterval(() => {
            moveImage();
        }, 1000); // Adjust the interval for the desired time between movements

        // Clean up interval on component unmount
        return () => {
            clearInterval(moveInterval);
        };
    }, [position]);


    return (

        <div className="fence" style={{ display: 'grid' }}>
            <Link to="/main" className="link">
                <img src={Arrow} style={{ cursor: 'pointer', position: 'absolute', top: 10, left: 10, width: '50px' }} />
            </Link>

            <div className='dummy'>
                <div className="farm" >
                    <div className="barn">
                        <img src={Fence} className="fencesprite"></img>
                    </div>
                    <div className="fencing" ref={containerRef}>
                        <img src={Cow} id='cow' style={{ position: 'absolute', top: position.top, left: position.left }} />
                        <img src={Fence} className="fencesprite"></img>

                    </div>


                </div>
                <div className="animals">
                    <p>Animals</p>
                    <div className="animallist">

                    </div>
                    <div className="animal">
                        <img src={Cow2} />
                        <p className="animaldesc">Obtained by meeting your budgeting goals</p>


                    </div>
                    <br />
                    <br />
                    <div className="animal" style={{ marginTop: '20px' }}>
                        <img src={Chicken} style={{ marginTop: '-2px', width:'69px',marginLeft:'23px',filter:'grayscale(0.95)' }}/>
                        <p className="animaldesc">Obtained by exceeding budgeting goal by 10%</p>
                    </div>
                    <br />
                    <div className="animal" style={{ marginTop: '20px' }}>
                        <img src={Sheep } style={{width:'105px',marginLeft:'1px',marginTop:'0px',filter:'grayscale(0.95)'}} />
                        <p className="animaldesc">Obtained by exceeding budgeting goal by 25%</p>
                    </div>



                </div>
            </div>

        </div >

    );
}

export default TheFarm;