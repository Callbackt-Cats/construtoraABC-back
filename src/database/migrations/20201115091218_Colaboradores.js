exports.up = function(knex) {
    return knex.schema.createTable('Colaboradores', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable(); 
        table.string('cpf').notNullable(); 
        table.string('tipo').notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Colaboradores');
};
