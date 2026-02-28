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

- Дублирование логики обработки query params, так как оба хендлера handleTitleFilterChange и handleGenreFilterChange почти одинаковые. Можно сделать универсальную функцию:

const handleFilterChange = (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
        const newParams = new URLSearchParams(searchParams);

        if (e.target.value) {
            newParams.set(key, e.target.value);
        } else {
            newParams.delete(key);
        }

        setSearchParams(newParams);
};

И далее использовать ее:

onChange={handleFilterChange('title')}
onChange={handleFilterChange('genre')}

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.
