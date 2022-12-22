import s from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types'
export default function FriendList({ friends }) {
  //   console.log(friends);
  return (
    <ul className={s.friend_list}>
      {friends.map(el => {
        return (
          <li className={s.item} key={el.id}>
            {el.isOnline ? (
              <span className={s.isOnlane}></span>
            ) : (
              <span className={s.status}></span>
            )}
            <img
              className={s.avatar}
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
FriendList.propTypes={
    friends: PropTypes.shape({
        name : PropTypes.string.isRequired,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool.isRequired,
        id : PropTypes.number.isRequired, 
     }
    )
}