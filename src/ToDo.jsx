import { useState, useEffect, useContext } from "react";
import { validate } from "./validate";
import { UserContext } from "./App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './form.module.css';

const ToDo = () => {


    const { state, setState, data, setData } = useContext(UserContext);

    const [errors, setErrors] = useState({});

    const [touch, setTouch] = useState({});

    useEffect(() => {
        setErrors(validate(state))
    }, [state, touch])



    const focusHandler = (e) => {
        setTouch({ ...touch, [e.target.name]: true })
    }

    const changeHandler = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    const sumbitHandler = (e) => {
        const uid = Math.floor(Math.random() * 100);
        setState({
            ...state, id: uid
        })
        e.preventDefault();
        console.log(state);
        if (Object.keys(errors).length) {
            for (const property in errors) {
                toast.error(errors[property], { theme: "colored", });
            }
        } else {
            toast.success('task created successfully', {
                position: "bottom-right",
                theme: "colored",
            });
            setData([...data, state])
        }

    }
    return (
        <>
            <form onSubmit={sumbitHandler} className={styles.toDoForm}>
                <div className="form-family">
                    <input type="text" name="name" placeholder="Name" value={state.name} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.name && touch.name && <span className="alert">{errors.name}</span>}
                </div>
                <div className="form-family" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input type="datetime-local" name="stime" value={state.stime} onChange={changeHandler} />
                    <input type="datetime-local" name="etime" value={state.etime} onChange={changeHandler} />
                </div>
                <div className="form-family">
                    <select name="category" value={state.category} onChange={changeHandler}>
                        <option>Math</option>
                        <option>Geometry</option>
                        <option>Science</option>
                        <option>Literature</option>
                    </select>
                </div>
                <div className="form-family">
                    <input type="text" name="colaborate" placeholder="Colaborate with" value={state.colaborate} onChange={changeHandler} />
                </div>
                <div className="form-family">
                    <textarea name="detail" value={state.detail} onChange={changeHandler} onFocus={focusHandler} placeholder="Detail" cols="30" rows="10"></textarea>
                    {errors.detail && touch.detail && <span className="alert">{errors.detail}</span>}
                </div>
                <div className="form-family">
                    <input className={styles.submit} type="submit" name="submit" value="create" />
                </div>


            </form>
            <ToastContainer />
        </>


    )
}

export default ToDo;