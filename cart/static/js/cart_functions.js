(function cartHandler() {

//ждём, когда загрузится документ
//тело функции будет выполнено только после полной загрузки документа
$(document).ready(function () {
    //alert($('.product-count')[0].innerHTML);

    $('.btn-delete').click(function (e) {
        // отменяем событие по умолчанию
        // в нашем случае это переход по ссылке
        e.preventDefault();

        let productId = null;
        // Получаем классы элемента
        // Разбиваем строку с классами на список отдельных классов
        // Перебираем конкретные классы в цикле forEach, подставляя их в переменную item
        e.target.className.split(' ').forEach(function (item) {
            // если подстрока prod содержится в строке item
            if (item.indexOf('prod') != -1)
                productId = Number(item.split('-')[1]) // получаем id конкретного товара
        });

        console.log(productId);

        $.get(`/cart/delete/${productId}/`,
              success=function (data) {
                if (data.successed) {
                    let productsCount = Number($('.product-count')[0].innerHTML);
                    let productCount = Number($(`.product-${productId}-count`)[0].innerHTML);
                    $(`.${productId}`).remove();
                    $('.product-count')[0].innerHTML = productsCount - productCount;
                }
              }
        );


        //$('.btn').attr('class').split(' ').forEach(function (e) { console.log(e); });
        //'prod-2'.indexOf('prod') != -1;
        //e.target.className
    });

    $('.btn-change').click(function (e) {
        e.preventDefault();

        // Получаем id товара по классу кнопки
        let productId = null;
        e.target.className.split(' ').forEach(function (item) {
            if (item.indexOf('-change-btn') != -1)  // находим нужный нам класс
                productId = Number(item.split('-')[1]); // получаем id из класса
        });

        // oldCount - кол-во товара (сейчас в корзине)
        // count - кол-во товара из пользовательского ввода
        let oldCount = Number($(`.product-${productId}-count`)[0].innerHTML);
        let count = Number($(`.product-${productId}-changed`)[0].value);

        $.get({
            url: `/cart/change/${productId}/${count}/`,
            success: function (data) {
                $(`.product-${productId}-count`)[0].innerHTML = count;
                // absoluteCount - кол-во товара в корзине (всего)
                let absoluteCount = Number($('.product-count')[0].innerHTML);
                // находим насколько изменилось кол-во товара в корзине (всего)
                absoluteCount -= oldCount - count;
                // заменяем кол-во товара в корзине (всего)
                $('.product-count')[0].innerHTML = absoluteCount;

                // если изменяем кол-во товара на ноль - удаляем товар из корзины
                if (count == 0)
                    $(`.prod-${productId}`).trigger('click');
            },
            error: function (data) { // запускается в случае ошибки на сервере
                alert('Такого товара нет в корзине');
            }
        });

    });
});

})();