Проверил вашу работу. Вы правильно используете инструменты memo, useMemo и useCallback. Работа выполнена на отлично!
ДЗ принято.

Что можно улучшить:
- В profitSum reduce будет вызываться при каждом изменении month, хотя profit не меняется:

const profitSum = useMemo(() => {
  const baseProfit = profit.reduce((acc, i) => acc + i, 0);
  return month * baseProfit;
}, [month, profit]);

Тут желательно разделить вычисления:

const baseProfit = useMemo(
  () => profit.reduce((acc, i) => acc + i, 0),
  [profit]
);

const profitSum = baseProfit * month;

Так reduce вызывается только когда меняется profit

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

#  почему при нажатии на year best рендерится 2 раза
Это хороший вопрос и вам плюсик за него. В режиме разработки React специально вызывает некоторые функции дважды, чтобы помочь найти баги. И это касается как раз функций компонентов, useEffect и useState. В production (сборке) этого не будет.
