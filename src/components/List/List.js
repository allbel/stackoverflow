import React, {memo} from 'react';
import styles from './List.module.css';

const List = memo(({items}) => {

  const itemsJSX = items.map(item => {
    console.log(item.tags.join(' '));

    return (
      <tr key={item.owner.account_id}>
        <td>
          <a href={item.owner.link}>{item.owner.display_name}</a>
        </td>
        <td>
          <a href={item.link}>{item.title}</a>
        </td>
        <td>
          {item.answer_count}
        </td>
        <td>
          {'#' + item.tags.join(' #')}
        </td>
      </tr>
    );
  })

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tr>
          <th>Автор запроса</th>
          <th>Тема</th>
          <th>Количество ответов</th>
          <th>Теги</th>
        </tr>
        {itemsJSX}
      </table>
    </div>
  );
});

export default List;