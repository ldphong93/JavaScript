
function arrayToObject(array){
    return array.reduce((result, field) => {
        result[field.id] = field.value;
        return result;
    }, {});
}

const formFields = [
    { id: 'login', value: 'john.doe' },
    { id: 'password', value: 'secret' }
  ];
  
  const formObject = arrayToObject(formFields);
  console.log(formObject);



  function objectToArray(obj) {
    return Object.keys(obj).map(
        key => ({ 
            id: key, 
            value: obj[key] 
        }));
  };

  const reverted = objectToArray(formObject);
  console.log(reverted);