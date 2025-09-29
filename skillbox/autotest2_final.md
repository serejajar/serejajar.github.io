# каким образом реализовывать сценарий 3го теста

В WebdriverIO вы можете перехватывать  сетевые запросы с помощью метода mock. Вот пример реализации от другого студента:

it('Сценарий 3 ошибка сервера валидации', async () => {
  browser.mocks('POST', '/wp-admin/admin-ajax.php', (req, res) => {
      res.status(500).send('Internal Server Error');
  });

  const initialPrice = await CartPage.getTotalPrice();
  CartPage.applyCoupon('GIVEMEHALYAVA');
  browser.pause(2000); // ждем обновления цены
  const finalPrice = await CartPage.getTotalPrice();
  expect(finalPrice).toEqual(initialPrice);
});
