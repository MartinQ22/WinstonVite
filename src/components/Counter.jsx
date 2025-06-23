import { useState, useEffect } from "react";



function Counter() {
    const [counter, setCounter] = useState(0)

    const handleAdd = () => setCounter(counter +1);
    const handleLess = () => setCounter(counter -1);

    useEffect (()=> {

    }, [counter])

    // [] .. se ejecuta una vez en el montaje
    // [x] .. se va ejecutar el codigo cada vez que el codigo se monte o varie yr
    

    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleLess}>-</button>
        </div>
    )

}

export default Counter;