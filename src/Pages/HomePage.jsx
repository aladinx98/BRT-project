import   { useEffect} from 'react'
import S1Hero from '../Components/HomeSections/S1Hero'
import { useLocation } from 'react-router-dom';
import S2About from '../Components/HomeSections/S2About';
import S3usecase from '../Components/HomeSections/S3usecase';
import S4Spred from '../Components/HomeSections/S4Spred';
import S5Roadmap from '../Components/HomeSections/S5Roadmap';
import S6PlanReward from '../Components/HomeSections/S6PlanReward';
import S7Contract from '../Components/HomeSections/S7Contract';
import S8Tokenomics from '../Components/HomeSections/S8Tokenomics';
// import Presale from '../Components/HomeSections/Presale';


const HomePage = () => {
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
              
          <S1Hero />
          {/* <Presale/> */}
          <S2About />
          <S3usecase />
          <S4Spred />
          <S5Roadmap />
          <S6PlanReward />
          <S7Contract />
          <S8Tokenomics/>
           
      </>
  )
}

export default HomePage