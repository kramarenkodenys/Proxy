let someObject = {
    'Hello': 'Hola',
};

const handler = {

    get (target, item) {
        if (item in target) {
            return target[item];
        } else console.log(`The "${item}" property doesn't exist in the Object`);
    },

    set (target, prop, val) {

        const valType = typeof val;

        switch (valType) {
            case "number" :
                val === Math.floor(val) && val > 0 ?
                    target[prop] = val :
                    console.log(`The ${val} is not natural number`);
                break;
            case "boolean" :
                val === true ?
                    target[prop] = val :
                    console.log(`The ${val} value is unacceptable for that object`);
                break;
            case "string":
                val !== "" && val !== val.split('').reverse().join('') ?
                    target[prop] = val :
                    console.log(`Your value "${val}" is unacceptable. You cannot set palindrome OR empty string`);
                break;
            default:
                console.log("Unacceptable type of value")
        }
    },
};

let newObject = new Proxy(someObject, handler);

// >>>DEMO<<<

// GET
// Positive get case
// console.log(newObject['Hello'] );

// Negative get case
// console.log(newObject['Hell']);

// SET
// Positive set case NUMBER
// newObject.num = 5;
// console.log(someObject);

// Negative set case NUMBER(zero)
// newObject.num = 0;
// console.log(someObject);

// Negative set case NUMBER(float)
// newObject.num = 5.5;
// console.log(someObject);

// Positive set case BOOLEAN
// newObject.bool = true;
// console.log(someObject);

// Negative set case BOOLEAN
// newObject.bool = false;
// console.log(someObject);

// Positive set case STRING
// newObject.str = "str";
// console.log(someObject);

// Negative set case STRING(empty)
// newObject.str = "";
// console.log(someObject);

// Negative set case STRING(palindrome)
// newObject.str = "eye";
// console.log(someObject);

// DEFAULT
// Unacceptable type of value
// newObject.obj = {};
// console.log(someObject);