exports.up = function(knex) {
    return knex.schema.createTable('Obras', function(table) {
        table.string('codigo').primary();
        table.string('endereco').notNullable();
        table.string('localizacao').notNullable(); 
        table.string('descricao').notNullable(); 
        table.string('valor').notNullable(); 
        table.string('idImovel').notNullable(); 
        table.string('idEngenheiro').notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Obras');
};
