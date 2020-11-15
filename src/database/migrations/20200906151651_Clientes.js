exports.up = function(knex) {
    return knex.schema.createTable('Clientes', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable(); 
        table.string('cpf').notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Clientes');
};
