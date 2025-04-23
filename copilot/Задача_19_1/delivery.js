export class Delivery {
    constructor(customerName, address, distance) {
        this.customerName = customerName;
        this.address = address;
        this.distance = distance;
        this._completed = false;
        this._priority = false;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
        this.updateCard();
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
        this.updateCard();
    }

    createCard() {
        this.cardElement = document.createElement('div');
        this.cardElement.className = 'delivery-card';
        this.updateCard();
        return this.cardElement;
    }

    updateCard() {
        if (!this.cardElement) return;

        this.cardElement.innerHTML = `
            <div class="delivery-card-content">
                <div class="delivery-card-header">
                    <h3>${this.customerName}</h3>
                    <span class="delivery-distance">${this.distance} км</span>
                </div>
                <p class="delivery-address">${this.address}</p>
                <div class="actions">
                    <button class="complete-btn">${this.completed ? '✓ Доставлено' : 'Отметить доставленным'}</button>
                    <button class="priority-btn">${this.priority ? '★ Приоритетная' : 'Сделать приоритетной'}</button>
                </div>
            </div>
      ${ this.completed ? '<span class="status-badge completed-badge">Доставлено</span>' : '' }
      ${ this.priority ? '<span class="status-badge priority-badge">Приоритет</span>' : '' }
       ` ;

        this.cardElement.className = 'delivery-card';
        if (this.completed) this.cardElement.classList.add('completed');
        if (this.priority) this.cardElement.classList.add('priority');

        this.cardElement.querySelector('.complete-btn').addEventListener('click', () => {
            this.completed = !this.completed;
        });

        this.cardElement.querySelector('.priority-btn').addEventListener('click', () => {
            this.priority = !this.priority;
        });
    }
}