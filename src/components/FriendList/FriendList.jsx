import css from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
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
