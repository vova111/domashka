import React, {Component} from 'react';
import logo from '../Header/star-wars.svg';
import styles from './styles.module.scss';

class Header extends Component {
    render() {
        const films = this.props.films;
        console.log(films);
        // const movies = films.map((film) => {
        //     console.log(film);
        //     return <li key={film._id}>{film.title}</li>
        // });

        return (
            <header className={styles['App-header']}>
                <img src={logo} className={styles['App-logo']} alt="logo"/>
                <p className={styles['App-title']}>
                    List of all movies from the Star Wars universe
                </p>
                <ul className={styles['App-movies']}>{/*movies*/}</ul>
            </header>
        );
    }
}

export default Header;
