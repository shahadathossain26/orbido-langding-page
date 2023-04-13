import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Payment from './components/Payment/Payment';
import Companies from './components/Companies/Companies';
import OurService from './components/OurService/OurService';

function App() {
  return (
    <div className=' max-w-[1440px] bg-[#00040F] h-[2000px] relative'>
      <div className='body'>
        <Header></Header>
        <Banner></Banner>
        <GetStarted></GetStarted>
        <Payment></Payment>
        <Companies></Companies>
        <OurService></OurService>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
