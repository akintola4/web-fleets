
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


function App() {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
            <button  id="switcher" name='switcher' aria-label='switcher' className="p-2 text-2xl text-white rounded-md cursor-pointer  hover:bg-none  hover:bg-zinic-600 bg-none" onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button>
    );
}

export default App;