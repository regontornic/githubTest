// function createObservationResource(properties, key, patientId, effectiveDateTime, value, components=undefined) {
//     const resource = {
//         resourceType: "Observation",
//         subject: {
//             reference: patientId
//         },
//         issued: effectiveDateTime
//     };

//     const selectKey = properties[key];
//     console.log('selectKey', selectKey);

//     // code(무조건)
//     // text는 없을수도있음...
//     const {code: coding, text} = selectKey;
//     resource.code = {coding, text};

//     // category(있을수도없을수도)
//     if(selectKey.category) {
//         let category = []
//         selectKey.category.forEach(el => {
//             category.push({coding:[el]})
//         });
//         resource.category = category;
//     }

//     // valueQuantity
//     if(selectKey.value) {
//         selectKey.value.value = value;
//         resource.valueQuantity = selectKey.value;
//     }

//     // component(있을수도없을수도)
//     if(selectKey.component) {
//         resource.component = [];
//         const componentKeys = Object.keys(components);
//         componentKeys.forEach(el => {
//             const componentObj = {};
//             const component = selectKey.component[el];
//             const {code:coding, text, value} = component;
//             const componentValue = components[el];
//             value.value = componentValue;
//             componentObj.code = {coding, text};
//             componentObj.valueQuantity = value;
//             resource.component.push(componentObj);
//         });
//     }
//     console.log('resource', resource);
// };


function createObservationResource({properties, key, patientId, effectiveDateTime, value, components}) {

    // properties, key, patientId, effectiveDateTime
    if(!properties || !key || !patientId || !effectiveDateTime) {
        return;
    }

    const resource = {
        resourceType: "Observation",
        subject: {
            reference: patientId
        },
        effectiveDateTime: effectiveDateTime,
        issued: effectiveDateTime
    };

    // 항목
    const selectKey = properties[key];

    // code
    const {code: coding, text} = selectKey;
    resource.code = {coding, text};

    // category
    if(selectKey.category !== undefined) {
        let category = []
        selectKey.category.forEach(el => {
            category.push({coding:[el]})
        });
        resource.category = category;
    }

    // bodySite
    if(selectKey.bodySite !== undefined) {
        const {code:coding, text} = selectKey.bodySite;
        resource.bodySite = {coding, text};
    }

    // valueQuantity
    if(selectKey.value !== undefined && value) {
        selectKey.value.value = value;
        resource.valueQuantity = selectKey.value;
    }

    // valueString
    if(selectKey.valueString !== undefined && value) {
        selectKey.valueString = value;
        resource.valueString = selectKey.valueString;
    }

    // component
    if(selectKey.component !== undefined && components) {
        resource.component = [];
        const componentKeys = Object.keys(components);
        componentKeys.forEach(el => {
            const componentObj = {};
            const component = selectKey.component[el];
            let {code:coding, text, value, valueString} = component;
            const componentValue = components[el];
            componentObj.code = {coding, text};
            if(value !== undefined) {
                value.value = componentValue;
                componentObj.valueQuantity = value;
            } else if(valueString !== undefined) {
                valueString = componentValue;
                componentObj.valueString = valueString;
            }
            resource.component.push(componentObj);
        });
    }
    return resource;
};

// const testObj = {
//     properties: LIFE_LOG,
//     key: 'bloodPressure',
//     patientId: 'Patient/80403',
//     effectiveDateTime: '2021-07-19T14:57:36+09:00',
//     components: {
//         sbp: 120,
//         dbp: 80
//     }
// };

const testObj = {
    properties: LIFE_LOG,
    key: 'sleep',
    patientId: 'Patient/80403',
    effectiveDateTime: '2021-07-19T14:57:36+09:00',
    components: {
        sleepTime: 420,
        wakeTime: 420
    }
};

const bloodPressureResource = createObservationResource(testObj);
console.log('bloodPressureResource', bloodPressureResource);
console.log('bloodPressureResource2', JSON.stringify(bloodPressureResource));