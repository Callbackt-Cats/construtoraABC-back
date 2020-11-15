exports.up = function(knex) {
    return knex.schema.createTable('Imoveis', function(table) {
        table.string('id').primary();
        table.string('endereco').notNullable();
        table.string('idCliente').notNullable(); 
        table.string('descricao').notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Imoveis');
};
