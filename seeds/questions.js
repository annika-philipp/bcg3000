
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: "First day of bootcamp, you feel...", week: 1},
        {id: 2, question: "function ageOneYear(obj) { \n //adds 1 to the age property of obj \n}", week: 1},
        {id: 3, question: "Someone says 'handlebars' - you think...", week: 2},
        {id: 4, question: "The 4 most common HTTP methods are...", week: 2},
        {id: 5, question: "You hear Ming talk about dogs, cats and cows", week: 3},
        {id: 6, question: "Promises...", week: 3},
        // {id: 7, question: 'First day of bootcamp, you feel...', week: 4},
        // {id: 8, question: 'First day of bootcamp, you feel...', week: 4},
        // {id: 9, question: 'First day of bootcamp, you feel...', week: 5},
        // {id: 10, question: 'First day of bootcamp, you feel...', week: 5},
        // {id: 11, question: 'First day of bootcamp, you feel...', week: 6},
        // {id: 12, question: 'First day of bootcamp, you feel...', week: 6},
      ]);
    });
};
