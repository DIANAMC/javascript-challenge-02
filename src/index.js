const orders = (time, product, table) => {
  console.log(`### Orden: ${product} para ${table}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`);
      reject( `No se pudo resolver la orden`)
    }, time);
  });
}

const menu = {
  hamburger: 'Combo Hamburguesa',
  hotdog: 'Combo Hot Dogs',
  pizza: 'Combo Pizza',
};

const table = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5'];

function randomTime(){
  let time = Math.floor(Math.random()*(8000-1000))+1000
  return time
}

console.log(randomTime()+ "holii")

const waiter = () => {
  orders(randomTime(), menu.hamburger, table[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
waiter();

const waiter2 = () => {
  orders(randomTime(), menu.hotdog, table[0])
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  orders(randomTime(), menu.pizza, table[2])
  .then((res) => console.log(res))
  .catch((err)=> console.log(err))
};
waiter2();