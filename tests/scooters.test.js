const {user,station,scooter} = require('../src/scooters.js')


describe('objects', () => {
    test('we can create objects and they have properties', () => {
        const sam = new user('Sam')
        const nhg =  new station('Notting Hill Gate')
        const es = new scooter ('Electric')
        expect(sam.name).toEqual('Sam')
        expect(nhg.location).toEqual('Notting Hill Gate')
        expect(es.model).toEqual('Electric')
    })
    test('can not create user without name', () => {
        expect(() => new user()).toThrowError('users need a name')
    })
    test('can not create stations without location', () => {
        expect(() => new station()).toThrowError('hiring stations need a location')
    })
    test('can not create scooters without model', () => {
        expect(() => new scooter()).toThrowError('scooters need a model')
    })
})

describe('stations', () => {
    test('we can Park scooters', () => {
        const nhg =  new station('Notting Hill Gate')
        const es = new scooter ('Electric')
        const ms = new scooter ('Manual')
        nhg.park(es)
        nhg.park(ms)
        expect(nhg.scooters).toContain(es)
        expect(es.location).toContain(nhg.location)
        expect(nhg.scooters).toContain(ms)
        expect(ms.location).toContain(nhg.location)
    })
    test('we can take a scooter from the station', () => {
        const nhg =  new station('Notting Hill Gate')
        const es = new scooter ('Electric')
        const ms = new scooter ('Manual')
        const expected = [];
        expected.push(es)
        nhg.park(es)
        nhg.park(ms)
        expect(nhg.scooters).toContain(es)
        expect(nhg.scooters).toContain(ms)
        nhg.remove(es)
        expect(nhg.scooters).toEqual(expect.not.arrayContaining(expected),)
    })
    test('we can hire a scooter', () => {
        station.stations = []
        const nhg =  new station('Notting Hill Gate')
        const es = new scooter ('Electric')
        const ms = new scooter ('Manual')
        const sam = new user ('Sam')
        const expected = [];
        expected.push(es)
        nhg.park(es)
        nhg.park(ms)
        expect(nhg.scooters).toContain(es)
        expect(nhg.scooters).toContain(ms)
        sam.hire(es)
        expect(nhg.scooters).toEqual(expect.not.arrayContaining(expected),)
        expect(sam.hired_scooter).toEqual(es)
      })
    test('do the scooters charge', async () => {
        station.stations = []
        const nhg =  new station('Notting Hill Gate')
        const es = new scooter ('Electric')
        await nhg.park(es)
        expect(es.charged).toEqual(true)

    })
})

