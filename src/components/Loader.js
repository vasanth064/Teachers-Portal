import './css/Loader.css';
const Loader = ({ text, signOut }) => {
  return (
    <div className='Loader'>
      <div className='spinnerPairHolder'>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
      </div>
      <h1 className='loadingText'>{text}</h1>
      <button className='loaderButton' onClick={signOut}>
        Logout
      </button>
    </div>
  );
};

export default Loader;
