document.addEventListener('DOMContentLoaded', () => {
    const contents = document.getElementsByClassName('content');
    const content = contents[0];

    var typeLetter = true;
    var typeCounter = 0;
    var textCounter = 0;
    var keysdown = [];



    var text = "Nhấn hoặc spacebar để tiếp tục!"

    var textContents = [
        {text: 'Xin chào!'},
        {text: 'Chào mừng đến với thử nghiệm của Hiệp.'},
        {text: 'Nơi đây có thể xem như một lá thư'},
        {text: 'Cho bạn bè'},
        {text: 'Cho người yêu, ...'},
        {text: 'Thậm chí cả crush đấy thằng FA ạ!'},
        {text: 'Là sản phẩm đầu tiên được mở công khai của tao'},
        {text: 'Ban đầu và cả bây giờ, dự án này không phải dành cho mày'},
        {text: 'Mà Là ...'},
        {text: 'Ali Dương'},
        {text: 'À không! Dương Ánh Liên!'},
        {text: 'Chúc tao thành công đi!'},
    ]





    function loop() {
        if (keysdown.ENTER){
            console.log(textContents[1].text)
        }

        if (typeCounter == text.length){
            typeCounter = 0;
            typeLetter = false;
        }

        if (typeLetter) {
            if (typeCounter < text.length) {
                content.textContent += text[typeCounter];
                typeCounter++
            }
        }


        requestAnimationFrame(loop)
    };loop()



    document.addEventListener('keydown', (e) => {
        keysdown[e.key.toLocaleUpperCase()] = true;
    })
    document.addEventListener('keyup', (e) => {
        delete keysdown[e.key.toLocaleUpperCase()];
        switch (e.key) {
            case " ":
                if (textCounter == textContents.length){
                    textCounter = 0;
                }

                content.textContent = " ";
                typeLetter = true;
                text = textContents[textCounter].text
                textCounter++
                break;
        }
    })
    document.addEventListener('click', () => {
        if (textCounter == textContents.length){
            textCounter = 0;
        }

        content.textContent = " ";
        typeLetter = true;
        text = textContents[textCounter].text
        textCounter++
    })


})
