class PersonRating extends Component {
  constructor(data) {
    super(data);
    // Можно лучше: Здесь лучше использовать название свойства name, так как будет храниться только одно имя, а не множество имен
    this._names = data.names;
    this._ratings = data.ratings;
  }
  get template() {
    // Можно лучше: article используется для чего-то крупного (статей в блоге), тут бы подошло использование тега li
    return `
      <article class="columns__rating-item">
        <h3 class="columns__rating-title">${this._names}</h3>
        <span class="columns__rating-count">${this._ratings}</span>
      </article>`.trim();
  }
}
