function filter_list(list) {
    // Return a new array with the strings filtered out
    return list.filter((item) => typeof item == "number");
  }
  
  console.log(filter_list([1, 2, "a", "b"]));
  console.log(filter_list([1, "a", "b", 0, 15]));
  