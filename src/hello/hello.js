import React from 'react';
import styles from './hello.module.css';

export const Hello = () => {
    return (
        <>
            <h1 className={styles.title}>Hello</h1>
            <h1 className="title">Hello</h1>
        </>

)
}

// export class Hello extends React.Component {
//     render() {
//         return <h1 className={styles.title}>Hello</h1>
//     }
// }