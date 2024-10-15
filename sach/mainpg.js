// Mở modal khi click vào hình ảnh
function openModal() {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var productImage = document.getElementById("productImage");

    modal.style.display = "flex"; // Hiển thị modal
    modalImage.src = productImage.src; // Đặt ảnh trong modal giống với ảnh đã click
}

// Đóng modal khi click vào nút close
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Ẩn modal
}

// Đảm bảo modal không tự động mở khi load trang
window.onload = function() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Ẩn modal khi trang vừa load
}