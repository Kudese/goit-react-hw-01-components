import s from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types'
import FrendCards from './FrendCards';
export default function FriendList({ friends }) {

  return (
    <ul className={s.friend_list}>
      {friends.map(el => FrendCards(s,el)
      )}
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