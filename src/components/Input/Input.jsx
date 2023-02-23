import React, {useState} from 'react';
import styles from './Input.module.css';

const Input = () => {
  const [value, setValue] = useState('')

  const onChangeHandler = (e) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div className={styles.box}>
      <input
        className={styles.input}
        type={"text"}
        value={value}
        onChange={onChangeHandler}
        placeholder={"Введите свой запрос"}
      />
    </div>
  );
};

export default Input;