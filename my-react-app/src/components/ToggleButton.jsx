import { useState } from 'react';

function ToggleButton() {

    const [toggle, setToggle] = useState(false);
  return (
    <div>
        <button onClick={ () => setToggle(!toggle) }>
            {toggle ? 85 : 450}
        </button>
    </div>
  );
}

export default ToggleButton;