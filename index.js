document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const emailInput = document.getElementById('emailInput');
    const popupName = document.getElementById('bookName');
    const popupAuthor = document.getElementById('bookAuthor');
    const popupPageNumber = document.getElementById('bookPageNumber');
    const popupPrice = document.getElementById('bookPrice');
    const popupImage = document.getElementById('bookImage');

    // Function to open the popup
    function openPopup(bookName, author, pageNumber, price, linkImage) {
        popupName.textContent = `${bookName}`;
        popupAuthor.textContent = `Tác giả: ${author}`;
        popupPageNumber.textContent = `Số trang: ${pageNumber}`;
        popupPrice.textContent = `Giá bán: ${price} VND`;
        popupImage.style.backgroundImage = `url('/image/${linkImage}.jpg')`;
        
        popupOverlay.style.display = 'block';
    }

    // Function to close the popup
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }

    // Function to handle submit form
    function submitForm() {
        alert("Đã đặt hàng thành công!!!");
    }

    // Make the openPopup function global
    window.openPopup = openPopup;

    // Event listeners
    closePopup.addEventListener('click', closePopupFunc);
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });

});
