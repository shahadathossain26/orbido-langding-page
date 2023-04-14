import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Payment from './components/Payment/Payment';
import Companies from './components/Companies/Companies';
import OurService from './components/OurService/OurService';
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects';


function App() {
  return (
    <div className=' max-w-[1440px] mx-auto bg-[#00040F] relative'>
      <div className='body'>
        <Header></Header>
        <Banner></Banner>
        <GetStarted></GetStarted>
        <Payment></Payment>
        <Companies></Companies>
        <OurService></OurService>
        <Footer></Footer>
        <BackgroundEffects></BackgroundEffects>


      </div>
    </div>
  );
}

export default App;
