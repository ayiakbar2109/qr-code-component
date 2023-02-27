import './App.css';
import qr from './images/image-qr-code.png';

function App() {
  return (
      <><section className='bg-white p-6 max-w-sm shadow-2xl rounded-2xl text-center'>
      <img src={qr} className='max-w-auto m-auto rounded-2xl'></img>
      <div className='mt-7 px-8'>
        <h2 className='text-2xl font-bold'>Improve your front-end skills by building projects</h2>
        <p className='my-5 text-grayishblue font-normal '>Scan the QR code to visit Frontend Mentor and take your coding to the next level</p>
      </div>
    </section>
    <div class="attribution mt-7 text-end">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Ayi Akbar Maulanastop</a>.
      </div></>
      
  );
}

export default App;
