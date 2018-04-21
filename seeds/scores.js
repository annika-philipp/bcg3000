
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {id: 1, user_id: 1, score: 100, player: "Annika"},
        {id: 2, user_id: 2, score: 90, player: "Rosie"},
      ]);
    });
};
