import React, { useState }  from 'react'

function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <nav>
            <div className='logo'>Softulas</div>

            <ul className='nav-links' style={{ transform: open ? "translateX(0px)" : "" }}>
                <li>
                    <a>home</a>
                </li>
                <li>
                    <a>about us</a>
                </li>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>contact us</a>
                </li>
            </ul>
            <i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>
        </nav>
    </div>
  )
}

export default Navbar