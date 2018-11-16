import React from "react";

const FormElement = props => {
  const showLabel = (show, label) => {
    return show ? <label>{label}</label> : null;
  };

  const handleChange = (event, element, blur) => {
    const newState = props.data;
    newState[element].value = event.target.value;
    if (blur) {
      let validData = validate(newState[element]);
      newState[element].valid = validData[0];
      newState[element].validationMessge = validData[1];
    }
    newState[element].touched = blur;
    props.change(newState);
  };

  const validate = element => {
    let error = [true, ""];
    if (element.validation.minLen) {
      const valid = element.value.length > 5;
      const message = !valid
        ? `${element.labelText} feild must be greater than ${
            element.validation.minLen
          }.`
        : "";

      error = !valid ? [valid, message] : error;
    }
    if (element.validation.required) {
      const valid = element.value.trim() !== "";
      const message = !valid ? `${element.labelText} feild is required.` : "";

      error = !valid ? [valid, message] : error;
    }
    return error;
  };

  const showValidation = data => {
    let errorMessage = null;

    if (data.validation && !data.valid) {
      errorMessage = <div className="label_error">{data.validationMessge}</div>;
    }
    return errorMessage;
  };

  let renderElement = data => {
    let formTemplate = null;
    let item = data.settings;
    switch (item.element) {
      case "input": {
        formTemplate = (
          <div>
            {showLabel(item.label, item.labelText)}
            <input
              {...item.config}
              value={item.value}
              onBlur={event => handleChange(event, data.id, true)}
              onChange={event => handleChange(event, data.id, false)}
            />
            {showValidation(item)}
          </div>
        );
        break;
      }
      case "textarea": {
        formTemplate = (
          <div>
            {showLabel(item.label, item.labelText)}
            <textarea
              {...item.config}
              value={item.value}
              onChange={event => handleChange(event, data.id)}
            />
          </div>
        );
        break;
      }
      case "select": {
        formTemplate = (
          <div>
            {showLabel(item.label, item.labelText)}
            <select
              name={item.config.name}
              value={item.value}
              onChange={event => handleChange(event, data.id)}
            >
              {item.config.options.map((opt, key) => (
                <option key={key} value={opt.value}>
                  {opt.text}
                </option>
              ))}
            </select>
          </div>
        );
        break;
      }
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  const renderFields = () => {
    let formArray = [];
    for (let element in props.data) {
      formArray.push({
        id: element,
        settings: props.data[element]
      });
    }
    return formArray.map((item, key) => {
      return (
        <div key={key} className="form_element">
          {renderElement(item)}
        </div>
      );
    });
  };

  return <div>{renderFields()}</div>;
};

export default FormElement;
