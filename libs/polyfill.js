function require(name) {
  const modules = {
    'redux': Redux,
    'prop-types': PropTypes,
    'react': React, 
  }

  return modules[name];

}
