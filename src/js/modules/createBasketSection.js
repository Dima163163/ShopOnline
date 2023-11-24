
export const createBasketSection = () => {
  const template = document.createDocumentFragment();
  const div = document.createElement('div');
  div.classList.add('section-inner-basket');

  div.insertAdjacentHTML('beforeend', `
  <div class="breadcrumps-wrapper breadcrumps-wrapper-article">
        <div class="container">
          <div class="section-breadcrumbs">
            <a href="./index-shop.html" class="section-breadcrumb">Главная</a>
            <div class="section-arrow"></div>
            <p class="section-breadcrumb">Корзина</p>
          </div>
        </div>
        </div>
        <div class="section-basket">
        <div class="container container-basket">
          <div class="section-basket-wrapper">
            <div class="section-basket-inner">
              <div class="basket-wrapper">
                <div class="basket-title-wrapper">
                  <h2 class="basket-title basket-wrapper-title">Корзина</h2>
                  <span class="basket-wrapper-span">2</span>
                </div>
                <div class="basket-checkbox-wrapper">
                  <label class="basket-label">
                    <input type="checkbox" name="checkbox" 
                    class="real-checkbox">
                    <span class="custom-checkbox"></span>
                    Выбрать все
                  </label>
                  <button class="basket-btn-del"></button>
                </div>
                </div>
              </div>
              <div class="delivery-wrapper-card">
                <div class="delivery-wrapper-title">
                  <h2 class="basket-title delivery-title">Способ доставки</h2>
                  <button class="delivery-btn-edit">Изменить</button>
                </div>
                <div class="delivery-address-wrapper">
                  <div class="delivery-address-inner">
                    <p class="delivery-card-descr 
                    delivery-address-descr">Пункт выдачи</p>
                    <p class="delivery-card-text 
                    delivery-address-naming">г. Москва (Московская 
                    область), улица Павлика Морозова, д. 48, 
                    (Пункт выдачи), Ежедневно 10:00-21:00</p>
                  </div>
                  <div class="delivery-price-inner">
                    <p class="delivery-card-descr 
                    delivery-price-descr">Стоимость доставки</p>
                    <p class="delivery-card-text 
                    delivery-price-mobil">Бесплатная доставка</p>
                    <p class="delivery-card-text delivery-price">Бесплатно</p>
                  </div>
                </div>
                <div class="delivery-crad-bottom">
                  <p class="delivery-date">1-13 февраля</p>
                  <div class="delivery-good-image">
                  </div>
                </div>
              </div>
            </div>
            <div class="total-wrapper">
              <div class="total-inner">
                <div class="total-inner-top">
                  <p class="total-inner-text">Итого:</p>
                  <p class="total-inner-text total-inner-price"> ₽</p>
                </div>
                <div class="total-inner-center">
                  <div class="total-inner-item total-inner-count">
                    <p class="total-inner-grey-text 
                    total-inner-count-text">Товары, 2  шт.</p>
                    <p class="total-inner-grey-text 
                    total-inner-count-sum"> ₽</p>
                  </div>
                  <div class="total-inner-item total-inner-discount">
                    <p class="total-inner-grey-text 
                    total-inner-discount-text">Скидка</p>
                    <p class="total-inner-grey-text 
                    total-inner-discount-sum"> ₽</p>
                  </div>
                  <div class="total-inner-item total-inner-delivery">
                    <p class="total-inner-grey-text 
                    total-inner-delivery-text">Доставка</p>
                    <p class="total-inner-grey-text 
                    total-inner-delivery-sum">Бесплатно</p>
                  </div>
                </div>
                <div class="total-inner-delivery-info">
                  <div class="total-inner-delivery-info-block">
                    <p class="total-inner-text-black 
                    total-inner-delivery-info-text">Доставка:</p>
                    <span class="total-inner-text-blue 
                    total-inner-delivery-info-span"> Пункт выдачи</span>
                  </div>
                  <p class="total-inner-grey-text 
                  total-inner-delivery-info-time">Ежедневно 10:00 - 21:00</p>
                  <p class="total-inner-grey-text 
                  total-inner-delivery-info-address">г. Москва 
                  (Московская область), улица Павлика Морозова, д. 48</p>
                </div>
                <div class="total-inner-delivery-date">
                  <p class="total-inner-text-black 
                  total-inner-delivery-date-text">Дата: </p>
                  <span class="total-inner-text-blue 
                  total-inner-delivery-date-span">10-13 февраля</span>
                </div>
                <div class="total-inner-delivery-pay">
                  <p class="total-inner-text-black 
                  total-inner-delivery-pay-text">Оплата: </p>
                  <span class="total-inner-text-blue 
                  total-inner-delivery-pay-span">Картой</span>
                </div>
              </div>
              <div class="total-inner-btn-wrapper">
                <button class="total-inner-btn">Заказать</button>
              </div>
              <div class="total-inner-conditions">
                <label class="checkbox-conditions">
                  <input type="checkbox" name="checkbox-conditions" 
                  class="real-checkbox">
                    <span class="custom-checkbox 
                    custom-checkbox-conditions"></span>
                    <div class="custom-checkbox-conditions-text">
                      Согласен с условиями
                      <span class="custom-checkbox-conditions-span">
                      правил пользования торговой площадкой и правилами возврата
                      </span>
                    </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        </div>
  `);

  template.append(div);
  console.log('template: ', template);
  return template;
};
