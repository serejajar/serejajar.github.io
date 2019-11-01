"use strict";
// JavaScript ES6+
// последний Google Chrome

/**
 * JavaScript класс-стенд с академическими задачами.
 * Небходимо заполнить все пропуски в классе так, чтобы он
 * удовлетворял поставленным assert'ам.
 */
class JobSeeker {
	/**
	 * Assert #1
	 */
	buildArray(value) {
		let stack = [value];
		const out = value => {
			if (typeof value === 'number') {
				stack.push(value);
				return out;
			}
      console.log('value', value);
			return value.call(stack);
		};

		return out;
	}

  /**
	 * Assert #2
	 * Не допускается ответ в виде вызова функции
	 * и вставка самого "бинарного" символа без преобразования
	 */
  '\u0002' = Infinity;



	/**
	 * Assert #3
	 * Пожалуйста, введите ваши реальные данные
	 */
	getCardElement() {
		let el = document.createElement('div');
		let data = {
			name: 'Сергей Ж.',
			city: 'г. Кишинев',
			age: '31',
		};

		let html = `
      <div>
        <div>
          <div>
            <span class="my-city"></span>
            <my-name>::name</my-name>
          </div>
        </div>
        <div class="my-city" data-city-name="::city"></div>
        <input data-my-age type="number" min="1" max="10" value="::age">
      </div>
    `;
		html = html.replace(/::(\w+)/g, (tmp, key) => data[key]);
    console.log('html', html);
		el.innerHTML = html;
		return el;
	}

  /**
	 * Assert #4
	 */
	isEqualStrings(str1, str2) {
		return new Set(
			[str1, str2]['map'](i => i['normalize']('NFKC'))
				.filter((v, i, a) => typeof v === 'string' && a.length === 2)
		).size === 1;
	}


	/**
	 * Assert #5
	 * Важно! Этот assert будет работать только в Google Chrome
	 */
	formatNumbers(...nums) {
    console.log(nums, nums.join('_'));
		// return someName(nums.join('_'))['someName'](2 operator 2);
	}
}

let inst = new JobSeeker();

console.assert(
	inst.formatNumbers(1, 233, 3, 22) === "4550652"	&& inst.formatNumbers(332, 12, 2) === "1210532"

	&& inst.formatNumbers(44, 232, 342, 1) === "3227250735"
);
