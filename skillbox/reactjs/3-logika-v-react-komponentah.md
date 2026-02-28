Все выполнено по условиям ДЗ и вам плюсик за использование функциональные обновления для state (setList(prev => ...)) и за использование иммутабельных методов массива map, filter и concat. Работа выполнена на отлично!
ДЗ принято.

Что можно улучшить
- Фокус на последнем элементе можно сделать проще. Вы можете просто проверять является ли он последним в списке карточек и кстанавливать фокус в этом случае.
- Лучше использовать функциональное обновления для state:
setList(prev => [...prev, newItem]);
Если его не использовать, то это может привести к проблеме когда обновления вызываются подряд до следующего рендера. Сейчас это не критично, просто помните об этом.
- Нажатие на кнопку "Новый элемент" это также потеря фокуса для поля ввода в карточки. Сейчас пустая карточка остается и это может привести поведению когда можно создать много пустых карточек:

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# как при переключении с него если нет заголовка он должен удалиться?
Полю ввода вам нужно добавить обработчик события потери фокуса onBlur. И в функции handleTitleBlur проверить заголовок title, если он пустой то вызвать метод удаления из useList.

<input
  ref={inputRef}
  className="card__title"
  type="text"
  value={title}
  onChange={handleTitleChange}
  onBlur={handleTitleBlur}
/>


# Как создать новый элемент
В useList в вам нужно добавить state который будет использоваться для отображения списка. Вот так вы можете создать новый элемент.

const createItem = () => {
    const newItem = {
      id: nextId.current++,
      title: '',
      done: false
    };

    setList(prev => prev.concat(newItem));
  };


# Как сделать автофокус
Это можно сделать добавив useEffect в карточку (Card.jsx):

const inputRef = useRef(null);

useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
}, [autoFocus]);

Где autoFocus  это переменная из пропсов которую вам нужно передать в компоненте CardList:

return (
    <ul className="card-list">
      {list.map(({ id, title, done }, index) => {
        return (
          <li key={id} className="card-list__item">
            <Card
              /*  остальные пропсы */
              autoFocus={index === list.length - 1}
            />
          </li>
        );
      })}
    </ul>
);

Так последний добавленный элемент всегда будет в фокусе.


# Как работать с ref для элементов
Работа с ref не отличается от того что вы используете для nextId.

1) Вам нужно объявить ref в Card:

const inputRef = useRef(null);

2) Указать его в качестве аввтрибутв элемента:

<input
        ref={inputRef}
        className="card__title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
/>
