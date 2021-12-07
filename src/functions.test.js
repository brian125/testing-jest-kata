import { createEvent } from './functions'
beforeAll(() => { 
    global.Date.now = jest.fn(() => new Date('2021-12-07T10:20:30.0Z').getTime()) 
});


//Globalizar la función con sus respectivas variables
const weekday = "mon";
const week = 1;
const openHour=8;
const closeHour=14

const result = createEvent(weekday, week, openHour, closeHour);

test('Validation a event title and content basic', () => {
    //TODO: hacer las verificaciones
    expect(result.title).toBe("[SOFKA U] Meeting Room");
    expect(result.description).toBe("Mentoring and Practice");
    expect(result.duration).toEqual([6, 'hour']);
});

test('Validation start date', () => {
    //TODO: hacer las verificaciones
    const validar = new Date(new Date().setDate(new Date().getDate() - 1)).toUTCString();
    expect(result.start.toUTCString())
    .toStrictEqual(validar);
});

test('Validation date', () => {
   //TODO: hacer las verificaciones
   const validar = new Date(new Date().setDate(new Date().getDate() - 1)).toUTCString();
   const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
   const formato = new Date(validar).toLocaleDateString('es-ES', options);
   
   expect(result.date).toEqual(formato);
});

describe('Validation illegal arguments', () => {
    //TODO: hacer las verificaciones

    test('Dias de la semana', () => {
        //@param {String} weekday opciones ('mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun')
        
    });
     

    test('Semanas posibles', () => {
        //@param {int} week opciones (1,2,3,4,5,...)
    })

    test('Open Hour', () => {
        //@param {int} openHour opciones (8,9,10,...,20,21,21,23,24)

    })

    test('closeHour', () => {
        //@param {int} closeHour opciones (8,9,10,...,20,21,21,23,24)

    })
});


test('create an event list of at least 10 events', () => {
    //TODO: hacer las verificaciones
    const listaObjetos = [
        {
            weekday: 'mon',
            week: 1,
            openHour: 8,
            closeHour: 9
        },
        {
            weekday: 'tue',
            week: 2,
            openHour: 8,
            closeHour: 10
        },
        {
            weekday: 'wed',
            week: 3,
            openHour: 8,
            closeHour: 11
        },
        {
            weekday: 'thu',
            week: 4,
            openHour: 8,
            closeHour: 12
        },
        {
            weekday: 'fri',
            week: 5,
            openHour: 8,
            closeHour: 13
        },
        {
            weekday: 'mon',
            week: 1,
            openHour: 8,
            closeHour: 14
        },
        {
            weekday: 'tue',
            week: 2,
            openHour: 9,
            closeHour: 10
        },
        {
            weekday: 'wed',
            week: 3,
            openHour: 9,
            closeHour: 11
        },
        {
            weekday: 'wed',
            week: 4,
            openHour: 9,
            closeHour: 12
        },
        {
            weekday: 'wed',
            week: 5,
            openHour: 9,
            closeHour: 13
        }
    ]

    listaObjetos.map(dato => {
        const result = createEvent(dato.weekday, dato.week, dato.openHour, dato.closeHour);
        const duration = [dato.closeHour - dato.openHour, 'hour'];

        expect(result.title).toBe("[SOFKA U] Meeting Room");
        expect(result.description).toBe("Mentoring and Practice");
        expect(result.duration).toEqual(duration);
    })

});