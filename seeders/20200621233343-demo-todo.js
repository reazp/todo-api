"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Todos",
      [
        {
          title: "shopping",
          details: "Shopping from Target to buy grocery",
          isCompleted: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Study",
          details: "study new release of JS framework",
          isCompleted: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Haircut",
          details: "Visit saloon to do a hair cut",
          isCompleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "car fix",
          details: "Take the car to mechanic",
          isCompleted: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
