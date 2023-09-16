import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
            <img src={user?.photo_url} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaQu89zWRmRCDKNG7AjhNOlozVWSRCax9mWii8hWlzzYHSSPlPHz8AbCr2iOJfJIWdws&usqp=CAU" />
            <Link to="/account">Личный кабинет</Link>

        </div>
    );
};

export default Header;
