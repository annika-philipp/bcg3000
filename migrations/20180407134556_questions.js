
exports.up = function(knex, Promise) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('id').primary()
        table.string('question')
        table.integer('week')
        table.blob('image')
      })
    }

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('questions')
};

//to create this file: yarn knex migrate:make questionsˀ
//I might have to revisit integer('week') abd blob('image')
// to update database to include any changes in here yarn knex migrate:latest.