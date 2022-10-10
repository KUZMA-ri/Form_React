import React from "react";
import styles from './styles/form.module.css';
import Notification from "./Notification";

class Form extends React.Component {
    state = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        showNotification: false,
    }


    changeData = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    submitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        this.setState({showNotification: true}); 
    }


    render() {
        const {name, lastName, email, password, showNotification} = this.state;

        return(
            <form className={styles.form} onSubmit = {this.submitForm}>
                <input className={styles.form__input}
                    type='text'
                    name='name'
                    placeholder='Введите Ваше имя'
                    onChange={this.changeData} 
                />

                <input className={styles.form__input}
                    type='text'
                    name='lastName'
                    placeholder='Введите фамилию'
                    onChange={this.changeData} 
                />

                <input className={styles.form__input}
                    type='email'
                    name='email'
                    placeholder='Ваш email'
                    onChange={this.changeData} 
                />

                <input className={styles.form__input}
                    type='password'
                    name='password'
                    placeholder='Пароль'
                    onChange={this.changeData} 
                />

                <button className={styles.form__btn}>Войти</button>

                {showNotification && (
                <Notification name={name} lastName={lastName} email={email} password={password}/>
            )}
            </form>
        )
    }
}

export default Form;