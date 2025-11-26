import useCount from '../../hooks/useCount';
import styles from './styles.module.css';

const ItemCount = () => {
  const { count, onIncrement, onDecrement } = useCount();

  return (
    <>
      <p className={styles.count}>COUNT : </p>
      <p className={styles.title}>{count}</p>
      <button onClick={onIncrement} className={styles.increment}>
        Increment
      </button>
      <button onClick={onDecrement} className={styles.decrement}>
        Decrement
      </button>
    </>
  );
};

export default ItemCount;
