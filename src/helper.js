export const Helper = {
getFormInputObject(form) {
    let data = {};
    form.serializeArray().map((item) => {
      data[item.name] = item.value;
      return false;
    })
    return data;
  }
}
