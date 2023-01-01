export default function FrendCards(s,el) {
   return (<li className={s.item} key={el.id}>
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
          </li>)
}