
exports.up = function (knex, Promise) {
    return knex.schema.createTable('pecas', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('descricao').notNull()
        table.double('preco').notNull()
        table.integer('quant').notNull()
    })
};

exports.down = function(knex) {
  
};
