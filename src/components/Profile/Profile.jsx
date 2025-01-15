import css from './Profile.module.css';

export default function Profile({ name, avatar, location, tag, stats }) {
  let id = 0;

  return (
    <div className={css.profile}>
      <div className={css.card}>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.statsList}>
        {Object.entries(stats).map(([key, value]) => {
          return <Stat value={value} title={key} key={++id} />;
        })}
      </ul>
    </div>
  );
}

function Stat({ value, title }) {
  return (
    <li className={css.stat}>
      <span className={css.statTitle}>{title}</span>
      <span className={css.statValue}>{value}</span>
    </li>
  );
}
