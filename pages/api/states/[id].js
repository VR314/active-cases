
const states = { "AZ": "Arizona", "AL": "Alabama", "AK": "Alaska", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DC": "District of Columbia", "DE": "Delaware", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" };
const pops = {
    "United States": "328239523",
    "Alabama": "4903185",
    "Alaska": "731545",
    "Arizona": "7278717",
    "Arkansas": "3017804",
    "California": "39512223",
    "Colorado": "5758736",
    "Connecticut": "3565287",
    "Delaware": "973764",
    "District of Columbia": "705749",
    "Florida": "21477737",
    "Georgia": "10617423",
    "Hawaii": "1415872",
    "Idaho": "1787065",
    "Illinois": "12671821",
    "Indiana": "6732219",
    "Iowa": "3155070",
    "Kansas": "2913314",
    "Kentucky": "4467673",
    //TODO: format the rest of this

    "Louisiana":
        "4648794"
    ,

    "Maine":
        "1344212"
    ,

    "Maryland":
        "6045680"
    ,

    "Massachusetts":
        "6892503"
    ,

    "Michigan":
        "9986857"
    ,

    "Minnesota":
        "5639632"
    ,

    "Mississippi":
        "2976149"
    ,

    "Missouri":
        "6137428"
    ,

    "Montana":
        "1068778"
    ,

    "Nebraska":
        "1934408"
    ,

    "Nevada":
        "3080156"
    ,

    "New Hampshire":
        "1359711"
    ,

    "New Jersey":
        "8882190"
    ,

    "New Mexico":
        "2096829"
    ,

    "New York":
        "19453561"
    ,

    "North Carolina":
        "10488084"
    ,

    "North Dakota":
        "762062"
    ,

    "Ohio":
        "11689100"
    ,

    "Oklahoma":
        "3956971"
    ,

    "Oregon":
        "4217737"
    ,

    "Pennsylvania":
        "12801989"
    ,

    "Rhode Island":
        "1059361"
    ,

    "South Carolina":
        "5148714"
    ,

    "South Dakota":
        "884659"
    ,

    "Tennessee":
        "6829174"
    ,

    "Texas":
        "28995881"
    ,

    "Utah":
        "3205958"
    ,

    "Vermont":
        "623989"
    ,

    "Virginia":
        "8535519"
    ,

    "Washington":
        "7614893"
    ,

    "West Virginia":
        "1792147"
    ,

    "Wisconsin":
        "5822434"
    ,

    "Wyoming":
        "578759"
    ,

    "Puerto Rico":
        "3193694"

};

module.exports = (req, res) => {
    const {
        query: { id }
    } = req

    var rawData;

    function toFull(input) {
        if (input === undefined) return input;
        var strInput = input.trim().toUpperCase();
        return states[strInput];
    }
    let stateName = toFull(id)
    let statePop = pops[stateName]
    fetch(`https://covidtracking.com/api/v1/states/${id}/current.json`)
        .then(response => response.json())
        .then(data => rawData = data)
        .then(() => res.json({
            'date': rawData.date,
            'state': stateName,
            'positive': rawData.positive,
            'negative': rawData.negative,
            'recovered': rawData.recovered,
            'active': rawData.positive - rawData.recovered,
            'deaths': rawData.death,
            'newCases': rawData.positiveIncrease,
            'newDeaths': rawData.deathIncrease,
            'population': statePop
        }))
}