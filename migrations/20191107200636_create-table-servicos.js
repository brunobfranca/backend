
exports.up = function (knex, Promise) {
    return knex.schema.createTable('servicos', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.integer('tempo').notNull()
        table.string('descricao').notNull()
        table.double('valor').notNull()        
    })
};

exports.down = function(knex) {
  
};
