import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Presale from '../Components/HomeSections/Presale'
import Pancakeswap from '../Components/HomeSections/Pancakeswap'
// import PresaleHistory from '../Components/HomeSections/PresaleHistory'



const PresalePage = () => {
    // Function to scroll to the Card element
    const location1 = useLocation();
    useEffect(() => {
        const scrollToElement = () => {
            const { search } = location1;
            const params = new URLSearchParams(search);
            const scrollToId = params.get('');

            if (scrollToId) {
                const element = document.getElementById(scrollToId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        scrollToElement();
    }, [location1]);

    return (
        <>
            <Presale />
            <Pancakeswap />
            {/* <PresaleHistory /> */}
            <br />
            <br />
            <br />
            <br />


        </>
    )
}

export default PresalePage