async function getInfo() {
    const stopNameElement  = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');

    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    
    try {
        stopNameElement.textContent = 'Loading...';
        const response = await fetch(url);

        if (response.status !== 200) {
            alert('Error: ' + response.status);
        }

        const data = await response.json();
        stopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach(buses => {
            const listElement = document.createElement('li');
            listElement.textContent = `Bus ${buses[0]} arrives in ${buses[1]} minutes`
            timeTableElement.appendChild(listElement);
        });
    } catch (error) {
        
    }
}