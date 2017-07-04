/* https://www.npmjs.com/package/indeed-scraper */
const indeed = require('indeed-scraper');
const queryOptions = {
    query: 'Software Developer',
    city: 'Los Angeles, CA',
    radius: '100',
    level: 'entry_level',
    jobType: 'fulltime',
    maxAge: '3',
    sort: 'date',
    limit: '100'
};

indeed.query(queryOptions).then(res => {
    console.log(res); // An array of Job objects
});
