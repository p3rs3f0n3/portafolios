// Definir los paises y sus capitales
const data = [
    { country: 'Alemania', capital: 'Berlin' },
    { country: 'Reino Unido', capital: 'Londres' },
    { country: 'Francia', capital: 'Paris' },
    { country: 'Grecia', capital: 'Atenas' },
    { country: 'Suiza', capital: 'Berna' },
    { country: 'Paises bajos', capital: 'Amsterdam' },
    { country: 'Ucrania', capital: 'Kiev' },
    { country: 'Polonia', capital: 'Varsovia' },
    { country: 'Bélgica', capital: 'Bruselas' },
    { country: 'Austria', capital: 'Viena' },
    { country: 'Croacia', capital: 'Zagreb' },
    { country: 'Suecia', capital: 'Estocolmo' },
    { country: 'Noruega', capital: 'Oslo' },
    { country: 'Dinamarca', capital: 'Copenhague' },
    { country: 'Finlandia', capital: 'Helsinki' },
    { country: 'Chequia', capital: 'Praga' },
    { country: 'Islandia', capital: 'Reikiavik' },
    { country: 'Rumania', capital: 'Bucarest' },
    { country: 'Irlanda', capital: 'Dublin' },
    { country: 'Malta', capital: 'La Valeta' },
    { country: 'Bulgaria', capital: 'Sofia' },
    { country: 'Albania', capital: 'Tirana' },
    { country: 'Hungria', capital: 'Budapest' },
    { country: 'Chipre', capital: 'Nicosia' },
    { country: 'Serbia', capital: 'Belgrado' },
    { country: 'Eslovenia', capital: 'Liubliana' },
    { country: 'Luxemburgo', capital: 'Luxemburgo' },
    { country: 'Liechtenstrm', capital: 'Vaduz' },
    { country: 'Estonia', capital: 'Tallin' },
    { country: 'Eslovaquia', capital: 'Bratislava' },
    { country: 'Montenegro', capital: 'Podgarica' },
    { country: 'Lituania', capital: 'Vilna' },
    { country: 'Macedonia del Norte', capital: 'Skopie' },
    { country: 'Moldavia', capital: 'Chisinou' },
    { country: 'Monaco', capital: 'Monaco' },
    { country: 'Ciudad del Vaticano', capital: 'Ciudad del Vaticano' },
    { country: 'Bosnia y Herzegovina', capital: 'Sarajevo' },
    { country: 'Bielorrusia', capital: 'Minsk' },
    { country: 'Letonia', capital: 'Riga' },
    { country: 'Andorra', capital: 'Andorra la vieja' },
    { country: 'San Marino', capital: 'San Marino' },
    { country: 'Kosovo', capital: 'Pristina' },
    { country: 'Isla de Man', capital: 'Douglas' },
    { country: 'Gibraltar', capital: 'Gibraltar' },
    { country: 'Aland', capital: 'Mariehamn' },
    { country: 'Islas Feroe', capital: 'Torshavn' },
    { country: 'Jersey', capital: 'Saint Helier' },
    { country: 'Portugal', capital: 'Lisboa' },
    { country: 'España', capital: 'Madrid' },
    { country: 'Italia', capital: 'Roma' },
];

// Desordenar el arreglo
data.sort(() => Math.random() - 0.5);

// Crear los elementos de país y capital
data.forEach((item, index) => {
    const countryDiv = document.createElement('div');
    countryDiv.textContent = item.country;
    countryDiv.id = `country-${index}`;
    countryDiv.classList.add('draggable');
    document.getElementById('countries').appendChild(countryDiv);

    const capitalDiv = document.createElement('div');
    capitalDiv.textContent = item.capital;
    capitalDiv.id = `capital-${index}`;
    capitalDiv.classList.add('draggable');
    document.getElementById('capitals').appendChild(capitalDiv);
});

// Inicializar jsPlumb
const instance = window.jsPlumb.getInstance();

// Permitir que los elementos se puedan conectar
instance.makeSource(document.querySelectorAll('.draggable'), {
    isSource: true,
    connector: ['Straight'],
    maxConnections: 1,
    endpoint: 'Dot',
    anchor: 'Continuous'
});

instance.makeTarget(document.querySelectorAll('.draggable'), {
    isTarget: true,
    dropOptions: { hoverClass: 'hover' },
    maxConnections: 1,
    endpoint: 'Dot',
    anchor: 'Continuous'
});

function checkAnswers() {
    let isCorrect = true;

    data.forEach((item, index) => {
        const connections = instance.getConnections({ source: `country-${index}` });

        if (connections.length === 0 || connections[0].targetId !== `capital-${index}`) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        alert('¡Correcto! Has emparejado todos los países con sus capitales.');
    } else {
        alert('Algo no está bien. Por favor, comprueba tus respuestas.');
    }
}
