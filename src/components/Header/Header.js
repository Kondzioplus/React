import React, { useEffect } from "react";
import styles from './Header.module.css';
import PropTypes from 'prop-types';//biblioteka do sprawdzania typów

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

      const futureYear = props.year + 10;

      console.log("Header return");

    return(
        <div>
        <h1>Article app</h1>
        <h2>Future year: {futureYear}</h2>
        <button className={buttonStyles.join(' ')} 
        onClick={props.toggleArticles}>Toggle Article</button>
        </div>
    );

}
    //sprawdzanie typów
    Header.propTypes = {
        year: PropTypes.number
    }

export default React.memo(Header);//optymalizowanie componentu funkcyjnego