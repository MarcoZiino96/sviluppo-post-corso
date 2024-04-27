import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/conterSlise";

function Conteggio(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return(
        <div className="text-center bg-slate-400 p-10 ">
            <p
            className="mb-3"
            > Conteggio:{count}</p>

            <button
            className="mr-3"
            onClick={() => dispatch(increment())}
            >
                Incrementa +
            </button>
            
            <button
            className="mr-3"
            onClick={() => dispatch(decrement())}
            >
                Decrementa -
            </button>
        </div>
    )
}

export default Conteggio;

