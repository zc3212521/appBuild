import type from "../../store/type"

const addNum = (data) => ({
    type: type.topicDetail.add,
    data: data,
})

const removeNum = (data) => ({
    type: type.topicDetail.remove,
    data: data,
})

export const getAdd = () => dispatch => {
    dispatch(addNum(10))
}

export const getRemove = () => dispatch => {
    dispatch(removeNum(10))
}