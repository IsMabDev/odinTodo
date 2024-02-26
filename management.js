function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses) {
    arrayClasses.forEach((myClass) => {
      element.classList.add(myClass);
    });
  }
  if (content) {
    element.innerText = content;
  }

  return element;
}
function createObject(attributes = [], values = []) {
  if (!Array.isArray(attributes) || !Array.isArray(values))
    throw messageLogger("createObject (): parameters must be arrays");
  let myObject = {};
  const updateObject = () => {
    for (let i in attributes) {
      if (values[i] === undefined) {
        values[i] = "";
        myObject[attributes[i]] = values[i];
      } else {
        myObject[attributes[i]] = values[i];
      }
    }
  };
  updateObject();
  const getObject = () => {
    return myObject;
  };
  const getAttributes = () => {
    return attributes;
  };
  const getValues = () => {
    return values;
  };
  const addAttribute = (newAttribute) => {
    if (!attributes.includes(newAttribute)) {
      attributes.push(newAttribute);
      updateObject();
    }
  };

  const delAttributes = (attributestoDelete) => {
    if (!Array.isArray(attributestoDelete)) {
      throw messageLogger(
        "create object ()/ delAttributes (): parameter must be array"
      );
    }
    attributestoDelete.forEach((element) => {
      attributes = attributes.filter((attribute) => attribute !== element);
    });

    updateObject();
  };
  const setValue = (attribute, in_value) => {
    let index = attributes.findIndex(
      (attributeToFind) => attributeToFind === attribute
    );
    if (index !== -1) {
      values;
      values[index] = in_value;
      updateObject();
    }
  };
  const getValue = (attribute) => {
    let index = attributes.findIndex(
      (attributeToFind) => attributeToFind === attribute
    );
    if (index !== -1) {
      return values[index];
    } else return messageLogger("The attribute doesn't exist");
  };
  return {
    getObject,
    getAttributes,
    getValues,
    addAttribute,
    delAttributes,
    setValue,
    getValue,
  };
}

function createTypes() {
  let types = ["string", "boolean", "number", "date"];
  const getTypes = () => {
    return types;
  };
  const addType = (newType) => {
    types.push(newType);
  };
  const deleteType = (typeToDelete) => {
    let indexToDelete = types.findIndex((element) => typeToDelete === element);
    types.splice(indexToDelete, 1);
  };
  return { getTypes, addType, deleteType };
}

function createAttributeValue(type = "string") {
  let value = "";
  const getValue = () => {
    return value;
  };
  const setValue = (in_value) => {
    if (typeof in_value === type) value = in_value;
    else messageLogger("The value is not from the same type");
  };
  return { getValue, setValue };
}

function messageLogger(message) {
  console.log(message);
}

export {
  createObject,
  createTypes,
  createAttributeValue,
  messageLogger,
  createHtmlElement,
};
