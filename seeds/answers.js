
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {id: 1, answer: 'excited!', question_id: 1, score: +40},
        {id: 2, answer: 'awesome!', question_id: 1, score: +40},
        {id: 3, answer: 'return obj[age]++', question_id: 2, score: -10},
        {id: 4, answer: 'return obj.age++', question_id: 2, score: +10},
        {id: 5, answer: 'Views', question_id: 3, score: +10},
        {id: 6, answer: 'Time to shave!', question_id: 3, score: -10},
        {id: 7, answer: 'GET POST PUT DELETE', question_id: 4, score: +10},
        {id: 8, answer: 'GET POST PUT ERASE', question_id: 4, score: -10},
        {id: 9, answer: 'Yoga time!', question_id: 5, score: +10},
        {id: 10, answer: "ming.animals = ['cats', 'dogs', 'cows']", question_id: 5, score: +5},
        {id: 11, answer: 'mainly empty, mostly broken...', question_id: 6, score: -20},
        {id: 12, answer: '.then(doSomething) .catch(error and deal with it)', question_id: 6, score: +10},
        {id: 13, answer: 'Ableton', question_id: 7, score: -20},
        {id: 14, answer: 'Abletech', question_id: 7, score: +10},
        {id: 15, answer: '...something something country', question_id: 8, score: +5},
        {id: 16, answer: '...something something state', question_id: 8, score: +10},
        {id: 17, answer: 'A translator for your client- and server-sides', question_id: 9, score: +5},
        {id: 18, answer: 'A Perplexing Instance', question_id: 9, score: -20},
        {id: 19, answer: 'Vegan Curry', question_id: 10, score: -5},
        {id: 20, answer: 'Haskell Curry', question_id: 10, score: +10},
        {id: 21, answer: 'Match', question_id: 11, score: -15},
        {id: 22, answer: 'Piet', question_id: 11, score: +20},
        // {id: 23, answer: 'Lamb Curry', question_id: 10, score: -5},
        // {id: 24, answer: 'Haskell Curry', question_id: 10, score: +10},
      ]);
    });
};
