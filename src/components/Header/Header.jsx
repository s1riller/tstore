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
            <img src={user?.photo_url} alt="https://assetsio.reedpopcdn.com/Modern-Warfare-2-Ghost-(2).jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp" />
            <Link to="/account">Личный кабинет</Link>

        </div>
    );
};

export default Header;
