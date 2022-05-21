module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    
    id: {
      type: Sequelize.INT
    },
    title: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Job;
};
