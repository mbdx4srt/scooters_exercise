
/**
 * Represents a station.
 * @constructor
 */

class station {
    static stations = []
    constructor(location) {
        this.location = location
        if (typeof location == 'undefined') {throw new Error("hiring stations need a location")}
        this.scooters = []
        this.constructor.stations.push(this)
    }
    park(scooter) {
        this.scooters.push(scooter)
        scooter.location = this.location
        scooter.charged = false
        return scooter.charge()
    }


    remove(scooter) {
        this.scooters.splice(this.scooters.indexOf(scooter), 1)
        scooter.location = undefined
    }
}

/**
 * Represents a scooter.
 * @constructor
 */

class scooter {
    constructor(model) {
        this.model = model
        this.charged = false
        if (typeof model == 'undefined') {throw new Error("scooters need a model")}
}

    charge(){
        return new Promise((resolve) => {
            setTimeout(() => {
                this.charged = true
                resolve()
            }, 2000)
        })
    }

}


/**
 * Represents a user.
 * @constructor
 */

class user {
    constructor(name) {
        this.name = name
        if (typeof name == 'undefined') {throw new Error("users need a name")}
    }
    hire(scooter) {
        this.hired_scooter = scooter
        const location = station.stations.find(station => station.location == scooter.location)
        location.remove(scooter)
    }

}


module.exports = {user, station, scooter}