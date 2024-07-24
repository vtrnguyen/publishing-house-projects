const xValues = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
            label: "Tuần trước: 547,000,000 VNĐ",
            data: [860,1140,1700,1060,1070,1110,1330,2210,6000,2478,3000,4000],
            borderColor: "blue",
            fill: false
        }, { 
            label: "Tuần hiện tại: 632,000,000 VNĐ",
            data: [1600,1700,1600,1900,2000,2700,4000,5000,7830,7000,8000,8500],
            borderColor: "green",
            fill: false
        }]
    },
    options: {
        legend: {display: false}
    }
});        

const ctx = document.getElementById('donutChart').getContext('2d');
const data = {
    labels: ['Trực tiếp', 'Mạng xã hội', 'Tài trợ', "Qua Email"],
    datasets: [{
        data: [40, 26, 20, 14],
        backgroundColor: ['violet', 'green', 'red', 'yellow'],
        hoverBackgroundColor: ['#66bb6a', '#ffb74d', '#e57373', '#e21212']
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%'
};

const donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});        