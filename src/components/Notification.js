import styles from './styles/notification.module.css';
const Notification = (props) => {
    const {name, lastName, email, password} = props;

    return(
        <div className={styles.notification}>
            <div className={styles.notification__container}>
                <h3 className={styles.notification__name}>Уважаемый, {name} {lastName}</h3>
                <br />
                <p className={styles.notification__text}> Ваш пароль {password} слишком ненадежен. 
                <br />
                Пожалуйста, перейдите по адресу: <a href={email}>{email}</a> и замените его. 
                <br />
                А то Васька с соседнего отдела Ваш пароль за 3 минуты взломал. А он, между прочим, у нас уборщиком работает </p>
            </div>
        </div>
    )
}

export default Notification;