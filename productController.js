

const productService = require("../services/productService");

exports.getAllProducts = (req, res) => {
  const result = productService.getAllProductsService();

  res.send(result);
};

exports.getProductById = (req, res) => {
  const result = productService.getProductByIdService(req.params.id);

  res.send(result);
};

exports.addProduct = (req, res) => {
  const result = productService.addProductService();

  res.send(result);
};