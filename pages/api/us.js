module.exports = (req, res) => {
    var rawData;
    fetch('https://covidtracking.com/api/v1/us/current.json')
        .then(response => response.json())
        .then(data => res.json(data));
}