const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const {company, phone_name, featured, sort, select, page, limit} = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (phone_name) {
    queryObject.phone_name = {$regex: phone_name, $options: "i"};
  }
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  let apiData = Product.find(queryObject);

  if (sort) {
    // let sortFix = sort.replace(",", " ");
    let sortFix = sort.split(",").join(" ");
    apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
  let pageVal = Number(req.query.page) || 1;
  let limitVal = Number(req.query.limit) || 3;

  let skip = (pageVal - 1) * limitVal;
  apiData = apiData.skip(skip).limit(limitVal);
  const data = await apiData;

  res.send(data);

  //or res.status(200).json(data);
};

module.exports = {
  getAllProducts,
};
