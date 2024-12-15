/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let _temp_array = []; // "(", ")", "{", "}", "[", "]"

  for (let i = 0; i < s.length; i++) {
    if (_temp_array.length === 0) {
      _temp_array.push(s[i]);
    } else {
      let _last_input_value = _temp_array.at(_temp_array.length - 1);

      switch (s[i]) {
        case ")": {
          if (_last_input_value === "(") {
            _temp_array.pop();
          } else {
            _temp_array.push(s[i]);
          }
          break;
        }
        case "}": {
          if (_last_input_value === "{") {
            _temp_array.pop();
          } else {
            _temp_array.push(s[i]);
          }
          break;
        }
        case "]": {
          if (_last_input_value === "[") {
            _temp_array.pop();
          } else {
            _temp_array.push(s[i]);
          }
          break;
        }
        default: {
          _temp_array.push(s[i]);
        }
      }
    }
  }

  return _temp_array.length === 0 ? true : false;
};

// Another solution
var isValid = function (s) {
  let _temp_storage = [],
    length;

  for (let i = 0; i < s.length; i++) {
    let _temp_storage_last_element = _temp_storage.at(_temp_storage.length - 1);

    _temp_storage_last_element === "(" && s[i] === ")"
      ? _temp_storage.pop()
      : _temp_storage_last_element === "{" && s[i] === "}"
      ? _temp_storage.pop()
      : _temp_storage_last_element === "[" && s[i] === "]"
      ? _temp_storage.pop()
      : _temp_storage.push(s[i]);
  }

  length = _temp_storage.length;

  return length === 0 ? true : false;
};

console.log(isValid("([])"));
