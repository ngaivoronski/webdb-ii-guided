exports.seed = function(knex) {
    // Deletes ALL existing entries
    return (
        // REMEMBER TO CHANGE THE TABLE NAME IN BOTH PLACES
        knex("veggies")
            // .del() // does not reset the id
            .truncate() // empties the table and resets the primary key (id)
            .then(function() {
                // Inserts seed entries
                // CHANGE THE TABLE NAME
                return knex("veggies").insert([
                    { name: "broccoli", like_it: 1 },
                    { name: "sprouts", like_it: 0 },
                    { name: "cabbage" }
                ]);
            })
    );
};
