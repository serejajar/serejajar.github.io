Проверил вашу работу и вам плюсик за правильное использование Redux Toolkit. Работа выполнена на отлично!
ДЗ принято.


Что можно улучшить
- Типизацию preloadedState из лучше использовать тип из Redux Toolkit, так как Partial ломает вложенные типы:
import type { PreloadedState } from "@reduxjs/toolkit"
export const makeStore = (preloadedState?: PreloadedState<RootState>)

PS: Также будем рады вашему отзыву о работе куратора и о содержании курса на hello@skillbox.ru или в бот обратной связи.
