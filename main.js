    // Hiện/ẩn thông tin cho từng mục
    function toggleInfo(event, infoText) {
        event.stopPropagation();
        const infoDiv = event.target.closest('.link').nextElementSibling;
        infoDiv.style.display = infoDiv.style.display === 'block' ? 'none' : 'block';
        infoDiv.textContent = infoText;
    }

    // Hiện div chia sẻ và cập nhật link
    function showShare(event) {
        event.stopPropagation();
        const shareDiv = document.querySelector('.share');
        shareDiv.style.display = 'flex';

        const link = event.currentTarget.getAttribute('data-link');
        const linkInput = document.getElementById('profileLink');
        linkInput.value = link;
    }

    // Ẩn div chia sẻ
    function hideShare() {
        const shareDiv = document.querySelector('.share');
        shareDiv.style.display = 'none';
    }

    // Sao chép link vào clipboard
    function copyLink() {
        const linkInput = document.getElementById('profileLink');
        linkInput.select();
        document.execCommand('copy');

        const message = document.getElementById('message');
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }

    // Xác nhận cuộc gọi
    function confirmCall(phoneNumber) {
        if (confirm(`Are you sure you want to call ${phoneNumber}?`)) {
            window.location.href = `tel:${phoneNumber}`;
        }
    }

    // Hàm khởi tạo cho menu
    document.addEventListener("DOMContentLoaded", function() {
        const menu = document.querySelector('.menu');
        const menuBtn = document.querySelector('.menu-btn');

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                menu.classList.toggle('menu-open');
            });
        }

        // Bắt sự kiện cho từng mục FAQ
        document.querySelectorAll(".faq").forEach(faq => {
            faq.addEventListener("click", () => {
                faq.classList.toggle("active");
            });
        });
    });

    // Animation cho các phần tử di chuyển
    document.querySelectorAll(".overmove").forEach(infi => {
        const infipar = infi.querySelector(".overmove div");
        Array.from(infipar.children).forEach(item => {
            infipar.appendChild(item.cloneNode(true));
        });
        infipar.style.animation = "move 20s linear infinite";
    });
