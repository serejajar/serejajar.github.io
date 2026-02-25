Проверил вашу работу. У вас все выполнено по условиям ДЗ и вас плюсик за корректное использование useParams и useSearchParams. Работа выполнена на отлично!

ДЗ принято.


Что можно улучшить
- Добавить типизацию useParams
const { playlistId } = useParams<{ playlistId: string }>();

- Потенциальный баг с Number(playlistId). Если playlistId будет undefined, то find просто ничего не найдёт, так как Number(undefined) будет  NaN. Поэтому тут лучше явно проверить:
const id = Number(playlistId);
if (!playlistId || isNaN(id)) {
  return <h2>Некорректный id</h2>;
}
Это делает код более устойчивым.

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.
