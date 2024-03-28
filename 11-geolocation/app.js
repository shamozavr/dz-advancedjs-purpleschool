const header = document.createElement('h1');
header.classList.add('header');
header.innerHTML = 'Your Coordinates';
document.body.insertBefore(header, document.querySelector('script'));

function getCoordinates () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      if (!latitude || !longitude) {
        reject (new Error('ошибка получения координат'))
      }
      resolve ([latitude, longitude])
    });
  });
}

getCoordinates().then(coords => {
  const coordinates = document.createElement('div');
  coordinates.classList.add('coordinates');
  
  coords.forEach((el) => {
    const coordinate = document.createElement('span');
    coordinate.classList.add('coordinate');
    coordinate.innerHTML = el;
    coordinates.appendChild(coordinate);
  })
  document.body.insertBefore(coordinates, document.querySelector('script'));
})