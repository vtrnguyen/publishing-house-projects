// Lấy phần tử canvas cho biểu đồ đơn hàng
const saleOrderCtx = document.getElementById('saleOrderChart').getContext('2d');

// Tạo biểu đồ donut cho đơn hàng
const saleOrderChart = new Chart(saleOrderCtx, {
    type: 'doughnut',
    data: {
        labels: ['Đã hoàn thành', 'Trong tiến trình', 'Bị trả lại'],
        datasets: [{
            label: 'Trạng thái đơn hàng',
            data: [85, 12, 3], // Dữ liệu mẫu cho các trạng thái
            backgroundColor: [
                'rgba(178, 222, 39)', // Màu cho "Hoàn thành"
                'rgba(45, 85, 255)', // Màu cho "Trong tiến trình"
                'rgba(150, 40, 27)'  // Màu cho "Bị trả lại"
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Trạng thái đơn hàng'
            }
        }
    },
});

// Lấy phần tử canvas cho biểu đồ kho hàng
const inventoryCtx = document.getElementById('inventoryChart').getContext('2d');

// Tạo biểu đồ donut cho kho hàng
const inventoryChart = new Chart(inventoryCtx, {
    type: 'doughnut',
    data: {
        labels: ['Hàng có sẵn', 'Hàng đã hết', 'Hàng sắp hết'],
        datasets: [{
            label: 'Trạng thái kho hàng',
            data: [93, 4, 3], // Dữ liệu mẫu cho các trạng thái
            backgroundColor: [
                'rgba(178, 222, 39)', // Màu cho "Hàng có sẵn"
                'rgba(45, 85, 255)', // Màu cho "Hàng đã hết"
                'rgba(150, 40, 27)'  // Màu cho "Hàng sắp hết"
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Trạng thái kho hàng'
            }
        }
    },
});