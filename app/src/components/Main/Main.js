import banner from '../../images/profile-banner.jpg';

import './Main.css';

function Main() {
  return (
    <main className="main">
      <img className="main__banner" src={banner} alt="banner" />
    </main>
  );
}

export default Main;