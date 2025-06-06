const curiosidades = [
    "Los gatos pueden hacer más de 100 sonidos vocales, mientras que los perros solo alrededor de 10.",
    "Un gato puede saltar hasta seis veces su longitud en un solo salto.",
    "Los gatos tienen un hueso extra en sus patas traseras que les permite aterrizar siempre de pie.",
    "El ronroneo de un gato no solo indica felicidad, sino que también puede ayudar a sanar huesos y tejidos.",
    "Los gatos domésticos pueden correr a velocidades de hasta 48 km/h.",
    "Los bigotes de los gatos son tan sensibles que pueden detectar cambios minúsculos en el aire.",
    "En Japón, hay una isla llamada Tashirojima donde los gatos superan en número a los humanos.",
    "Los gatos dedican hasta el 50% de su tiempo de vigilia a acicalarse."
  ];
  
  function mostrarCuriosidad() {
    const indice = Math.floor(Math.random() * curiosidades.length);
    document.getElementById('curiosidad-aleatoria').textContent = curiosidades[indice];
  }
  
  document.getElementById('btn-curiosidad').addEventListener('click', mostrarCuriosidad);
  