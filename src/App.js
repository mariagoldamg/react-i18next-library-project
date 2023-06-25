
import './App.css';
import { useTranslation } from 'react-i18next';



function App() {
const { i18n , t} = useTranslation();

const toggleLang =()=> {
  i18n.changeLanguage( i18n.language === 'english' ? 'russian' : 'english')
}

  return (
    <div className="App">
     <h1>{t("I LOVE ANDY")}</h1>
     <button onClick={toggleLang}>
      {i18n.language === 'english' ? 'RU' : 'EN'}
     </button>
    </div>
  );
}

export default App;
