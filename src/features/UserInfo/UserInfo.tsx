import FormField from '../../components/FormField/FormField';
import useUserFields from '../../hooks/useUserFields';
import styles from './style.module.css';
import useItemFields from '../../hooks/useItemFields';

const UserInfo = () => {
  const { userInfo, userInput, saveInput, handleUserInfoChange, handleUser } =
    useUserFields();

  const {
    items,
    itemInput,
    hideItems,
    setItemInput,
    handleHideItems,
    handleSubmit,
  } = useItemFields();

  return (
    <div className={styles.full}>
      <form onSubmit={handleUser}>
        <FormField
          labelName="NAME : "
          name="name"
          className={styles.form}
          placeholder="Enter Name"
          value={userInfo.name}
          onChange={(e) => handleUserInfoChange(e)}
        />
        <FormField
          labelName="Email : "
          name="email"
          className={styles.form}
          placeholder="Enter Name"
          value={userInfo.email}
          onChange={(e) => handleUserInfoChange(e)}
        />
        <button className={styles.add} type="submit">
          "Save User"
        </button>
      </form>

      {saveInput && (
        <div className={styles.itemsList}>
          <span>
            Hello <span className={styles.threat}>{userInput.name}</span>😎
          </span>
          <p>Now that I know your email!!!</p>
          <span>
            Daily threats on their way at :{' '}
            <span className={styles.threat}>{userInput.email}</span> 🤡
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <FormField
          labelName="Add Item : "
          name="item"
          className={styles.form}
          placeholder="Add Item"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />

        <button className={styles.add} type="submit">
          Add Item
        </button>
        <button className={styles.add} type="reset" onClick={handleHideItems}>
          {hideItems ? 'Show Items' : 'Hide Items'}
        </button>
      </form>

      {hideItems === false && (
        <div className={styles.itemsList}>
          <p>Selected Items : </p>
          {items.map((item, index) => (
            <p key={item}>
              {' '}
              Item no {index + 1}: {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
