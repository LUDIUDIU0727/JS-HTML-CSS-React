import React, { useState } from "react";
import styles from "./AddUser.module.css"
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = (event) => {

        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({ title: 'invalid input', message: "please enter a valid name and age(non-empty values)." });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({ title: 'invalid input', message: "please enter a valid age(>0)." });
            return;

        }

        props.onAddUser(enteredUserName, enteredUserAge)
        setEnteredUserName('');
        setEnteredUserAge('');

    };

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);

    }

    const userageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);

    };


    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

            <Card>
                <form onSubmit={addUserHandler} className={styles.input}  >
                    <label htmlFor="Username">Username</label>
                    <input id="Username" value={enteredUserName} type="text" onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age(Years)</label>
                    <input id="Age" value={enteredUserAge} type="number" onChange={userageChangeHandler} />

                    <Button type="submit" >Add User</Button>

                </form>
            </Card>
        </div>



    )




}

export default AddUser;