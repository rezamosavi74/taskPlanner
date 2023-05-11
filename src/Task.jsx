import { useContext } from "react";
import { UserContext } from "./App";
import styles from "./task.module.css"
import More from "./more";

const Task = () => {
    const { data } = useContext(UserContext);
    console.log(data.length)
    return (
        <div style={{ width: "300px", margin: 'auto' }}>
            {data.length == 0 && <div style={{textAlign: "center"}}>there is no task yet</div>}
            {data.map(item => <div className={styles.card} style={item.isDone?{background:"green"}:{background:"inherit"}} key={item.id}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h4><b>{item.name}</b></h4>
                        <More detail={item}/>
                    </div>

                    <p>{item.detail}</p>
                    {item.colaborate && <div className={styles.time}><span>colaborate with:</span> <span>{item.colaborate}</span></div>}
                    {item.stime && <div className={styles.time}><span>start Time:</span> <span>{item.stime}</span></div>}
                    {item.etime && <div className={styles.time}><span>end Time:</span><span>{item.etime}</span></div>}
                </div>
                {console.log(item)}
            </div>)}
        </div>
    )
}

export default Task;