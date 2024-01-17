import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const Header = ({ logo, title }) => (
  <div className='App-header'>
    <img src={logo} alt="logo" className='App-logo'/>
    <h1>{title}</h1>
  </div>
);

const Nav = ({ menuItems }) => (
  <ul>
    {menuItems.map((item, index) => (
      <li key={index}>
        <a href={item.link}>{item.title}</a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p>@copyright все права защищены {currentYear} год.</p>
    </div>
  );
};

const Title = ({ text, size, color }) =>{
  const styles = {
    fontSize: size,
    color: color || 'black'
  };

  return <h1 style={styles}>{text}</h1>;
}

const SimpleInput = ({ type, placeholder, value, onChange }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

function App() {
  const [isShow, setIsShow] = useState(false);
  const menuItems = [
    { title: 'Новости', link: '/news' },
    { title: 'Блог', link: '/' },
    { title: 'События', link: '/' },
    { title: 'Погода', link: '/' },
    { title: 'Расписание', link: '/' },
  ];
  const logoUrl = 'https://sun9-9.userapi.com/impg/Hv2wcZW8kd5fuqftg6J6DLqt8QYOki-_hc3PHg/mB79cUmTxE0.jpg?size=706x706&quality=96&sign=3b10c03535aff19ca0f8e490fee10814&c_uniq_tag=eyA7MEe4UPmmqDOcIr8vNj-5Nhs7_E6ykAKpn92ReNQ&type=album';
  const siteTitle = 'Название';
  const handleInputChange = (event) => {
    
  };

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div className='App'>
      <Header logo={logoUrl} title={siteTitle} />
      <Nav menuItems={menuItems} />
      <Title text="Title" size="24px" color="blue" />
      <SimpleInput type="text" placeholder="Введите" value="" onChange={handleInputChange} />

      <div>
        <button onClick={toggleVisibility}>{isVisible ? 'Скрыть' : 'Показать'}</button>
        {isVisible && <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed pharetra metus, a fermentum leo. Duis pharetra dui sem, at sollicitudin nisl sodales eget. Curabitur imperdiet dolor diam, et rutrum est venenatis a. Pellentesque rhoncus porta est in pellentesque. Sed non accumsan turpis. Phasellus lobortis pulvinar tristique. Proin sit amet ex eu mi molestie imperdiet vitae id dui. Ut ligula nunc, efficitur in pellentesque nec, semper quis urna.</p>}
      </div>

      <Footer />
    </div>
  );
}

export default App;
