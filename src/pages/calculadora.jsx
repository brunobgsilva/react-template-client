import './main.css';
import Calculadora from '../components/calculadora.jsx';

function Calcular() {
    return (
      <div className="grid-container">
      <header className="header"></header>
      <aside className="sidebar">Menu Lateral</aside>
      <main className="content">
        {Calculadora()}
      </main>
    </div>
    );
  }
  
  export default Calcular;