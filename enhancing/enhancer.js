module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let {enhancement, durability} = item
 
  return { ...item };
}

function fail(item) {
  enhancement < 15
  ? durability -= 5
  : enhancement > 14
  ? durability -= 10
  : enhancement > 16
  ? enhancement -= 1
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
