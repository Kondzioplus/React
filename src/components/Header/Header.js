import React, { useEffect } from "react";
import styles from './Header.module.css';

const Header = props => {

    useEffect(() => {
        console.log('Header useEffect');
    })

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