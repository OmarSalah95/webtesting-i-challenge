module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  item.enhancement < 20
    ? item.enhancement += 1
    : null
  return { ...item };
}

function fail(item) {
  let {enhancement, durability} = item
  enhancement < 15
    ? durability -= 5
      : enhancement > 15
      ? (enhancement -= 1,  durability -= 10)
      : enhancement > 14
      ? durability -= 10
    : null
  item.durability = durability
  item.enhancement = enhancement
  return { ...item };
}

function repair(item) {
  item.durability = 100
  return { ...item };
}

function get(item) {
  return { ...item };
}
