const reply = (res, body, timeout = 1000, status = 200) => {
  return setTimeout(() => {
    res.status(status).json(body);
  }, timeout);
};

const getById = (entities) => {
  return (id) => {
    return entities.find((entity) => entity.id === id);
  };
};

module.exports = { reply, getById };
