import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const main = document.querySelector('.main_container');

    const handleClick = () => {
      setIsOpen(false);
    }

    if (main) {
      main && main.addEventListener('click', handleClick);
    }
  })

  return (
    <nav className='nav_bar_container'>
      <section className="nav_bar">
        <h2 
          className='title'
          onClick={() => navigate("/")}
        >Random API Docs</h2>
        <button 
          type='button' 
          aria-label='Menu Button'
          className={isOpen ? 'hamburger active' : 'hamburger'}
          onClick={(e) => setIsOpen(!isOpen)}
        >
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </button>
      </section>
      {isOpen && (
        <section className='nav_bar_menu fade_in'>
          <button 
            type='button' 
            name='Parks'
            className='link fade_in'
            onClick={() => {
              navigate('/parks');
              setIsOpen(false);
            }}
          >
            Parks
          </button>
          <button 
            type='button' 
            name='Cocktails'
            className='link fade_in'
            onClick={() => {
              navigate('/cocktails');
              setIsOpen(false);
            }}
          >
            Cocktails
          </button>
        </section>
      )}
    </nav>
  )
}

export default NavBar;