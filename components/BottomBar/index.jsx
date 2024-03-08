"use client";
import React from 'react';
import styles from './bottombar.module.scss';
import axios from 'axios';

const BottomBar = () => {


    const createPost = async () => {
        try {
            const res = await axios.post("/api/items",
                {
                    title: "Ejemplo de título 3",
                    description: "Ejemplo de descripción de post 3"
                }
            );
            console.log(res) //check now
        } catch (e) { }
    }

    const updatePost = async () => {
        try {
            const res = await axios.put("/api/items",
                {
                    title: "Ejemplo de título 1 (updated)",
                }
            );
            console.log(res);
        } catch (e) { }
    }

    // const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
    // axios.get("/api/items?id=prueba", {
    //     search: "exzampl"
    // }).then(data => {
    //     console.log("DATA", data)
    // })

    // console.log(data)
    // axios.post("",).then((data) => {
    //     console.log("DATA", data)
    // })


    return (
        <div className={styles.bottomBar}>
            <button onClick={() => updatePost()}>
                Updated Post
            </button>
            <button onClick={() => createPost()}>
                Crear Post
            </button>
        </div>
    )
}

export default BottomBar