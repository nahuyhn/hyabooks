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

    // Thêm sự kiện click cho tất cả nút "Thêm vào giỏ hàng"
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = {
                id: this.getAttribute("data-id"), // Lấy ID từ thuộc tính data-id
                title: this.getAttribute("data-title"), // Lấy tên từ thuộc tính data-title
                price: parseFloat(this.getAttribute("data-price")), // Lấy giá từ thuộc tính data-price
                image: this.getAttribute("data-image") // Lấy đường dẫn hình ảnh từ thuộc tính data-image
            };

            console.log("Sản phẩm được thêm vào giỏ hàng:", product); // In thông tin sản phẩm ra console

            // Kiểm tra sản phẩm có dữ liệu hợp lệ không
            if (product.id && product.title && !isNaN(product.price) && product.image) {
                addToCart(product); // Gọi hàm thêm vào giỏ hàng
            } else {
                console.error("Thông tin sản phẩm không hợp lệ", product);
                alert("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!");
            }
        });
    });
}

// Hàm thêm vào giỏ hàng
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã có, tăng số lượng
        cart[existingProductIndex].quantity += 1;
    } else {
        // Nếu không, thêm sản phẩm mới vào giỏ hàng
        product.quantity = 1; // Thiết lập số lượng ban đầu
        cart.push(product);
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Giỏ hàng hiện tại:", cart); // In giỏ hàng ra console
    alert(`Đã thêm "${product.title}" vào giỏ hàng!`);
}
