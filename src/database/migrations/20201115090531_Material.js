exports.up = function(knex) {
    return knex.schema.createTable('Materiais', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('codigo').notNullable(); 
        table.string('idFornecedor').notNullable(); 
        table.string('idResponsavel').notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Materiais');
};
