let obj = {
    name: [{
        cars: ["volvo", "benze", 'toyoto', [{
            players: ['Dhoni', "sachi", {
                ages: {
                    sachinWife: "Subbamma"
                }
            }]
        }], ["suchi", "sharma", "vivek", [{
            games: ["volleyball", "football", 'cricket']
        }]]
        ]
    }]
}

console.table(obj.name[0].cars[4][1]);
