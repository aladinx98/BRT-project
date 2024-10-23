
 
import logo from "../assets/logo/brt.gif";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';


const RoundInfo = ({ round }) => {

  return (
    <div className={`flex md:contents ${round.reversed ? 'flex-row-reverse' : ''}`}>
      {!round.reversed && (
        <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-indigo-300" style={{ background: "linear-gradient(180deg, rgba(0, 255, 239, 1) 0 %, rgba(30, 121, 255, 1) 100 %)" }}></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 bg-slate-900 border-4 border-indigo-400 rounded-full top-1/2"></div>
        </div>
      )}

      <div className={`  relative p-4 my-10 text-lg text-white bg-slate-900 border-2 rounded-xl  ${round.reversed ? 'col-start-1 col-end-5' : 'col-start-6 col-end-10'} mr-auto tracking-wider`}>
        <table className="w-full">
          <tbody>
            <tr className="border-b border-[#ffff]">
              <td className="py-2 px-2">Total Supply</td>
              <td className="py-2 px-2">{round.totalSupply}</td>
            </tr>
            <tr className="border-b border-[#ffff]">
              <td className="py-2 px-2">Duration</td>
              <td className="py-2 px-2">{round.duration}</td>
            </tr>
            <tr className="border-b border-[#ffff]">
              <td className="py-2 px-2">Dilute</td>
              <td className="py-2 px-2">{round.dilute}</td>
            </tr>
            <tr className="border-b border-[#ffff]">
              <td className="py-2 px-2">{round.reversed ? 'Presale 01' : 'Seed Round'} (Price)</td>
              <td className="py-2 px-2">{round.price}</td>
            </tr>
            <tr className="border-b border-[#ffff]">
              <td className="py-2 px-2">Pool Amount</td>
              <td className="py-2 px-2 flex items-center justify-between">
                {round.poolAmount}
                <span className={`${round.status === "Live" ? "text-red-500" : "text-gray-400"} text-base font-bold bg-gray-700 rounded-3xl px-3`}>{round.status}</span>
              </td>
            </tr>
            <tr className="border-b border-[#ffff]">
              <td className="py-2 px-2">DEX LIsting Price</td>
              <td className="py-2 px-2">{round.livePrice}</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 leading-6 font-bold text-xl">{round.message}</p>
        <div className="absolute flex gap-3 text-xl font-bold text-primary-gradient -top-9 left-1 whitespace-nowrap">
          <p className="text-[#20F2FF]">{round.name}</p>
          <img loading="lazy" className="h-[25px] w-auto" src={round.logo} alt={round.logoAlt} />
          <p className="text-white font-normal">{round.platform}</p>
        </div>
      </div>


      {round.reversed && (
        <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-indigo-300 rounded-t-full" style={{ background: "linear-gradient(42deg, rgba(0, 255, 239, 1) 0 %, rgba(30, 121, 255, 1) 100 %)" }}></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 bg-slate-900 border-4 border-indigo-400 rounded-full top-1/2"></div>
        </div>
      )}
    </div>
  )
}




const StagesPage = () => {
  const roundsData = [
    {
      id: 1,
      name: "Presale 01",
      totalSupply: "80000000",
      duration: "10/07/2024 - 10/10/2024",
      dilute: "7.2% (1100000000) of total supply",
      price: "$0.0099",
      poolAmount: "$79200",
      livePrice: "$0.10",
      status: "Ended !",
      gain: "15X",
      message: "We will generate 15X from presale 2",
      logo: logo,
      logoAlt: "Logo",
      platform: "BRT token. ",
      reversed: true,
    },

    {
      id: 2,
      name: "PRESALE 02",
      totalSupply: "70000000",
      duration: "11/10/2024 - 31/12/2024",
      dilute: "6.3% (1100000000) of total supply",
      price: "$0.011",
      poolAmount: "$770000",
      livePrice: "$0.10",
      status: "Live",
      // status: "Coming Soon..",
      gain: "15X",
      message: "We've experienced a 15X gain since Presale 03.",
      logo: logo,
      logoAlt: "Logo",
      platform: "BRT token. ",
      reversed: false,
    },
    {
      id: 3,
      name: "PRESALE 03",
      totalSupply: "50000000",
      duration: "01/01/2025 - 28/02/2025",
      dilute: "4.5% (1100000000) of total supply",
      price: "$0.015",
      poolAmount: "$750000",
      livePrice: "$0.10",
      // status: "Live",
      status: "Coming Soon..",
      gain: "7.5X",
      message: "We will generate 7.5X from presale 4",
      logo: logo,
      logoAlt: "Logo",
      platform: "BRT token. ",
      reversed: true,
    },
    {
      id: 4,
      name: "PRESALE 04",
      totalSupply: "50000000",
      duration: "01/03/2025 - 30/04/2025",
      dilute: "4.5% (1100000000) of total supply",
      price: "$0.020",
      poolAmount: "$1000000",
      livePrice: "$0.10",
      // status: "Ended",
      status: "Coming Soon..",
      gain: "15X",
      message: "We've experienced a 15X gain since Presale 05.",
      logo: logo,
      logoAlt: "Logo",
      platform: "BRT token. ",
      reversed: false,
    },
    {
      id: 5,
      name: "PRESALE 05",
      totalSupply: "50000000",
      duration: "01/05/2025 - 30/06/2025",
      dilute: "4.5% (1100000000) of total supply",
      price: "$0.025",
      poolAmount: "$1250000",
      livePrice: "$0.10",
      // status: "Live",
      status: "Coming Soon..",
      gain: "7.5X",
      message: "We will generate 7.5X from exchange listing",
      logo: logo,
      logoAlt: "Logo",
      platform: "BRT token. ",
      reversed: true,
    },
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>BRT token Presale Stages – Investment Timeline & Opportunities</title>
          <meta name="description" content="Track the progress of BRT token through our comprehensive presale stages. From initial seed funding to advanced presales, explore investment opportunities and projected gains." />
        </Helmet>
        <div className="bg-[url('/spattern.png')] bg-repeat relative flex flex-col items-center gap-14 min-h-[50vh] w-[100vw] justify-center px-1 pb-14 md:px-1 desktop:flex-col desktop:items-center">
          <div className="text-center flex flex-col justify-center items-center gap-7">
            <h2 className="text-5xl uppercase font-bold tablet:text-4xl">
              <span className="text-primary-gradient text-4xl"> presale STAGES </span>
            </h2>
          </div>

          <div className=" max-w-[80rem] ">
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
              {roundsData.map(round => (
                <RoundInfo key={round.id} round={round} />
              ))}
            </div>

          </div>

        </div>
      </HelmetProvider>
    </>
  );
};

RoundInfo.propTypes = {
  round: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalSupply: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    dilute: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    poolAmount: PropTypes.string.isRequired,
    livePrice: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gain: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    logoAlt: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    reversed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default StagesPage;