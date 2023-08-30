import _ from 'lodash'

export function arrSymmetricDifference(arr1, arr2, by) {
    if(!by) {
        return _.xor(arr1, arr2);
    } else {
        return _.xorBy(arr1, arr2, by)
    }
}

export function getValuesByIndex(indexProperty, indexes, valueProperty, arr) {
    const indexesSet = new Set(indexes);
    const values = []
    
    _.forEach(arr, function(o) {
        if(indexesSet.has(o[indexProperty])) {
            values.push(o[valueProperty])
        }
    })

    return values;
}

export function flattenAndUnique(arr) {
    const flattenedArr = _.flattenDeep(arr);

    return _.uniq(flattenedArr);
}