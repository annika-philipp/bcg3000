
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
        {id: 12, answer: '.then(doSomething) \n.catch(error and deal with it)', question_id: 6, score: +10},
      ]);
    });
};
