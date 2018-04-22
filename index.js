function produceDrivingRange(range) {
    return function(blockRangeStart, blockRangeEnd) {
        const distance = Math.abs( parseInt(blockRangeStart) - parseInt(blockRangeEnd) );
        if ( distance > range) {
            return `${distance - range} blocks out of range`;
        } else {
            return `within range by ${range - distance}`;
        }
    }
}

function produceTipCalculator(percent) {
    return function(fare) {
        return percent * fare;
    }
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}