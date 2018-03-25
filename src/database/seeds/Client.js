
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client').del()
    .then(function () {
      // Inserts seed entries
      return knex('client').insert([
        {id: 1, name: 'Mike', age: 41},
        {id: 2, name: 'Luis', age: 44},
        {id: 3, name: 'Mario', age: 53}
      ]);
    });
};
