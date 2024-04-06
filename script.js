function updateCircleColor(data) {
    data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });

    data.forEach(item => {
        const div = document.getElementById(item.name);
        if (item.status === 'Done') {
            div.style.backgroundColor = 'green';
        } else {
            div.style.backgroundColor = 'red';
        }
    });
}

function fetchDataAndRefresh() {
    fetch('matkul.json')
        .then(response => response.json())
        .then(data => {
            updateCircleColor(data);
        })
        .catch(error => {
            console.error('Error, Mencari data:', error);
        });
}

fetchDataAndRefresh();