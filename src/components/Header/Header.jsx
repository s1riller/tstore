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
            <img src={'user?.photo_url'} alt="as" />
            <Link to="/account">Личный кабинет</Link>

        </div>
    );
};

export default Header;
