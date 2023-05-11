import { useState, useContext } from "react"
import { UserContext } from "./App";
import styles from "./task.module.css"

const More = ({ detail }) => {

    const { data, setData, setState, state } = useContext(UserContext);

    const [visible, setVisibel] = useState(false)
    const moreHandler = () => {
        visible ? setVisibel(false) : setVisibel(true)
    }
    const deletHandler = (a, b) => {
        const goal = a.filter(item => item.id !== b);
        setData([...goal]);
    }

    const doneHandler = (a, b) => {
        const goal = a.find(item => item.id === b);
        goal.isDone = !goal.isDone;
        setData([...data]);
        moreHandler();
    }
    return (
        <>
            <button onClick={moreHandler} >more</button>
            {visible && <div className={styles.more}>
                <button onClick={() => deletHandler(data, detail.id)}>delete</button>
                <button onClick={() => doneHandler(data, detail.id)}>done</button>
            </div>}
        </>

    )
}
export default More;