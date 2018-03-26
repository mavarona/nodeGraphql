
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {id: 1, name: 'Lasportiva mutant', cant: 1, text: 'Trail running'},
        {id: 2, name: 'Lasportiva akasha', cant: 2, text: 'Trail running Akasha'},
        {id: 3, name: 'Lasportiva Helios', cant: 3, text: 'Trail running Helios'}
      ]);
    });
};
