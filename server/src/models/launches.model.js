const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'kepler Exploration X',
    rocket : 'Explorer ISI',
    launchDate : new Date('December 27,2030'),
    destination: 'Kepler-442 b',
    customer : ['Noibi','NASA'],
    upcoming:true,
    success:true,
};

launches.set(launch.flightNumber,launch); //we want to keep track of each launch using the flightNumber

module.exports = {
    launches,
};