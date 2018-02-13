/* Lab 4, Part 1 - write the code requested by lines marked //TODO  */


/* a. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

var rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// TODO add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787;
console.log(rates);

// TODO if you had 100 Euros, calculate the equivalent value in Australian Dollars (AUD)
var AUD_100 = 100 / rates.AUD;
console.log(AUD_100);


// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
var max_rate = 0;
for (i in rates) {
    if (rates[i] > max_rate) {
        max_rate = rates[i];
    }
}
console.log("The largest value in rates is: " + max_rate);


//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.




/* b. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th, fetched from http://api.open-notify.org/iss-now.json.
 */

var iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
};

// TODO Extract the latitude value, and log it to the console.
var lat = iss_location.iss_position.latitude;
console.log(lat);

// TODO Extract the longitude value, and log it to the console.
var lon = iss_location.iss_position.longitude;
console.log(lon);



/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

var cats_and_owners = [
  { name: 'Bill Clinton', cat : 'Socks' },
  { name: 'Gary Oldman', cat : 'Soymilk' },
  { name: 'Katy Perry', cat : 'Kitty Purry' },
  { name: 'Snoop Dogg', cat : 'Miles Davis' }
];

// TODO print Gary Oldman's cat's name
console.log(cats_and_owners[1].cat);

// TODO Taylor Swift's cat is called  'Meredith'. Add this data to the array.
cats_and_owners[4] = { name: 'Taylor Swift', cat: 'Meredith' };
console.log(cats_and_owners);

// TODO write a loop to print each cat owner, and their cat's name, one per line
for (i in cats_and_owners) {
    console.log(cats_and_owners[i].name + "," + cats_and_owners[i].cat);
}



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

var nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
};

// TODO print the full name of the Literature Nobel laureate.
for (i in nobel_prize_winners_2017.prizes) {
    if (nobel_prize_winners_2017.prizes[i].category === "literature") {
        console.log(nobel_prize_winners_2017.prizes[i].laureates[0].firstname + "  " + nobel_prize_winners_2017.prizes[i].laureates[0].surname);
    }
}

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
var physics_laureates = [];
var pl_index = 0;
for (i in nobel_prize_winners_2017.prizes) {
    if (nobel_prize_winners_2017.prizes[i].category === 'physics') {
        for (winners in nobel_prize_winners_2017.prizes[i].laureates) {
            physics_laureates[pl_index] = nobel_prize_winners_2017.prizes[i].laureates[winners].id;
            pl_index += 1;
        }
        console.log(physics_laureates);
    }
}


// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
var all_categories = [];
var ac_index = 0;
for (i in nobel_prize_winners_2017.prizes) {
    all_categories[ac_index] = nobel_prize_winners_2017.prizes[i].category;
    ac_index += 1
}
console.log(all_categories);


// TODO write code to print the total number of prize categories
console.log("The number of categories are: " + all_categories.length);

// TODO write code to count the total number of laureates from 2017. (have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.)
var laureates = [];
var l_index = 0;
for (i in nobel_prize_winners_2017.prizes) {
    for (n in nobel_prize_winners_2017.prizes[i].laureates) {
        laureates[l_index] = nobel_prize_winners_2017.prizes[i].laureates[n].id;
        l_index += 1;
    }
}
console.log("The number of laureates is: " + laureates.length);