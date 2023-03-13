function tickets(array, sorting) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let tickets = [];
  array.forEach((el) => {
    let [city, price, status] = el.split("|");
    price = Number(price);
    tickets.push(new Ticket(city, price, status));
  });
  
  if (sorting === 'destination') {
    tickets.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (sorting === 'price') {
    tickets.sort((a, b) => a.price - b.price);
  } else if (sorting === 'status') {
    tickets.sort((a, b) => a.status.localeCompare(b.status));
  }
  return tickets
}
