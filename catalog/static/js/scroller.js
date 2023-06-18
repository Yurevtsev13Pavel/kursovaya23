(function scroller() {
    let isLoading = false;
    let isEnd = false;
    let page = 1;

    $(window).scroll(function () {
        if ($(window).height() - $(window).height() - 200 <= 0 ) {
            if  (isLoading)
                return;
            isLoading = true;

            $.ajax({
                url: 'http://localhost:8000/catalog/ajax_list/',
                data: {
                    page: page,
                },
                success: (htmlCode) => {
                    $('.page')[0].append(htmlCode);
                }
            });
        }
    });
})();