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
        this.updateCard ();
        return this.cardElement;
    }

    updateCard() {
        if (!this.cardElement) return;

        this.cardElement.innerHTML = `
      <div class="delivery-card-header">
        <h3>${this.customerName}</h3>
        <span class="delivery-distance">${this.distance} км</span>
      </div>
      <p class="delivery-address">${this.address}</p>
      <div class="delivery-actions">
        <button class="complete-btn">${this.completed ? '✓ Доставлено' : 'Отметить доставленным'}</button>
        <button class="priority-btn">${this.priority ? '★ Приоритетная' : 'Сделать приоритетной'}</button>
      </div>
           ` ;

        this.cardElement.className = 'delivery-card';
        if (this.completed) this.cardElement.classList.add('completed');
        if (this.priority) this.cardElement.classList.add('priority');

        const completeBtn = this.cardElement.querySelector('.complete-btn');
        const priorityBtn = this.cardElement.querySelector('.priority-btn');

        if (completeBtn) {
            completeBtn.addEventListener('click', () => {
                this.completed = !this.completed;
            });
        }

        if (priorityBtn) {
            priorityBtn.addEventListener('click', () => {
                this.priority = !this.priority;
            });
        }
    }
}

export class EditDelivery extends Delivery {
    constructor(customerName, address, distance, status = 'delivery') {
        super(customerName, address, distance);
        this._status = status;
        this.modal = this.createModal();
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
        this.updateCard();
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Редактирование доставки</h2>
                <div class="form-group">
                    <label for="edit-name">Имя покупателя:</label>
                    <input type="text" id="edit-name" value="${this.customerName}">
                </div>
                <div class="form-group">
                    <label for="edit-address">Адрес:</label>
                    <input type="text" id="edit-address" value="${this.address}">
                </div>
                <div class="form-group">
                    <label for="edit-distance">Расстояние (км):</label>
                    <input type="number" id="edit-distance" value="${this.distance}">
                </div>
                <div class="form-group">
                    <label for="edit-status">Статус:</label>
                    <select id="edit-status">
                        <option value="delivery" ${this.status === 'delivery' ? 'selected' : ''}>Доставляется</option>
                        <option value="delivered" ${this.status === 'delivered' ? 'selected' : ''}>Доставлен</option>
                        <option value="canceled" ${this.status === 'canceled' ? 'selected' : ''}>Отменён</option>
                    </select>
                </div>
                <div class="modal-actions">
                    <button class="cancel-btn">Отмена</button>
                    <button class="save-btn">Сохранить</button>
                </div>
            </div>
           ` ;

        modal.querySelector('.cancel-btn').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.querySelector('.save-btn').addEventListener('click', () => {
            this.customerName = modal.querySelector('#edit-name').value;
            this.address = modal.querySelector('#edit-address').value;
            this.distance = parseInt(modal.querySelector('#edit-distance').value);
            this.status = modal.querySelector('#edit-status').value;
            modal.style.display = 'none';
            this.updateCard();
        });

        document.body.appendChild(modal);
        return modal;
    }

    updateCard() {
        if (!this.cardElement) return;

        // Очищаем предыдущие классы статусов
        this.cardElement.className = 'delivery-card';
        this.cardElement.classList.remove('status-delivery', 'status-delivered', 'status-canceled');

        // Добавляем класс статуса
        this.cardElement.classList.add (`status-${ this.status }`);

        // Добавляем классы состояний
        if (this.completed) this.cardElement.classList.add('completed');
        if (this.priority) this.cardElement.classList.add('priority');

        this.cardElement.innerHTML = `
      <div class="delivery-card-header">
        <h3>${this.customerName}</h3>
        <span class="delivery-distance">${this.distance} км</span>
      </div>
      <span class="status-badge">${this.getStatusText()}</span>
      <p class="delivery-address">${this.address}</p>
      <div class="delivery-actions">
        <button class="edit-btn">Изменить</button>
        <button class="complete-btn">${this.completed ? '✓ Доставлено' : 'Отметить доставленным'}</button>
        <button class="priority-btn">${this.priority ? '★ Приоритетная' : 'Сделать приоритетной'}</button>
      </div>
           ` ;

        // Назначаем обработчики событий
        this.cardElement.querySelector('.complete-btn')?.addEventListener('click', () => {
            this.completed = !this.completed;
        });

        this.cardElement.querySelector('.priority-btn')?.addEventListener('click', () => {
            this.priority = !this.priority;
        });

        this.cardElement.querySelector('.edit-btn')?.addEventListener('click', () => {
            this.showEditModal();
        });
    }

    getStatusText() {
        const statusMap = {
            'delivery': 'Доставляется',
            'delivered': 'Доставлен',
            'canceled': 'Отменён'
        };
        return statusMap[this.status] || this.status;
    }

    showEditModal() {
        const modal = this.modal;
        modal.querySelector('#edit-name').value = this.customerName;
        modal.querySelector('#edit-address').value = this.address;
        modal.querySelector('#edit-distance').value = this.distance;
        modal.querySelector('#edit-status').value = this.status;
        modal.style.display = 'flex';
    }
}