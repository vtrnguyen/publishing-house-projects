const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Cực thích', 'Rất thích', 'Thích', 'Không thích', 'Ghét'],
        datasets: [{
            label: 'Số người',
            data: [540, 340, 200, 75, 51],
            backgroundColor: [
                'rgba(195, 255, 104)',
                'rgba(140, 20, 252)',
                'rgba(255, 255, 159)',
                'rgba(249, 180, 45)',
                'rgba(217, 30, 24)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sự yêu thích công việc của nhân viên'
            }
        }
    }
});