// Hàm mở modal khi click vào hình ảnh
function openModal() {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var productImage = document.getElementById("productImage");

    modal.style.display = "flex"; // Hiển thị modal
    modalImage.src = productImage.src; // Đặt ảnh trong modal giống với ảnh đã click
}

// Hàm đóng modal khi click vào nút close
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Ẩn modal
}

// Đảm bảo modal không tự động mở khi load trang
window.onload = function() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Ẩn modal khi trang vừa load

    // Thêm sự kiện click vào nút "Thêm vào giỏ hàng" ở đây
    const addToCartButton = document.querySelector(".add-to-cart");
    
    if (addToCartButton) {
        addToCartButton.addEventListener("click", addToCart);
    } else {
        console.warn("Nút 'Thêm vào giỏ hàng' không tồn tại!");
    }
}

// Hàm thêm vào giỏ hàng
function addToCart() {
    const product = {
        title: "Chân Trời Sáng Tạo - Tiếng Việt tập 1",
        price: 40000,
        image: "../assets/css/image/tv1.png" // Đường dẫn hình ảnh
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng!");
}

