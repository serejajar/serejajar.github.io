Проверил вашу работу и вам плюсик за правильное использование Redux Toolkit. Работа выполнена на отлично!
ДЗ принято.


Что можно улучшить
- Типизацию preloadedState из лучше использовать тип из Redux Toolkit, так как Partial ломает вложенные типы:
import type { PreloadedState } from "@reduxjs/toolkit"
export const makeStore = (preloadedState?: PreloadedState<RootState>)

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.
