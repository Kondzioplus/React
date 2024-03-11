import React, { useEffect } from "react";
import styles from './Header.module.css';

const Header = props => {

    useEffect(() => {
        console.log('Header useEffect');

        setTimeout(() => {
            console.log('Http request completed');
        }, 1500);
    }, [props.showArticles]);//pusta tablica - funkcja wywoływana po utworzeniu componentu. Dla innych przypadków sterowanie funckji wywołane jest przez drugi parametr

    let buttonStyles = [styles.toggleButton]; 
    if (props.showArticles){
       
        buttonStyles.push(styles.red);
      }

    return(
        <div>
        <h1>Article app</h1>
        <button className={buttonStyles.join(' ')} 
        onClick={props.toggleArticles}>Toggle Article</button>
        </div>
    );

}

export default Header;