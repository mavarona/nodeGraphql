
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        {id: 1, client_id: 1},
        {id: 2, client_id: 2},
        {id: 3, client_id: 3}
      ]);
    });
};
