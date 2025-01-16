import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.card}>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </li>
  );
}
