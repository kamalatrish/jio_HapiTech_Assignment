import * as listResponse from '../mock/dataList.json'

export const getData = () => {
    console.log(listResponse)
    if (listResponse.response.status) {
        console.log(listResponse.response.dataList);
        return listResponse.response.dataList
    }
}

export const updateList = (listData, nameVal) => {
    listData = [...listData,
    {
        "name": nameVal,
        "isStarred": false
    }]
    return listData;
}

