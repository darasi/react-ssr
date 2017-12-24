import { ADD, GET_HOME_INFO } from '../constants'
export const add = (count) => ({ type: ADD, count })

export const getHomeInfo = () => async(dispatch,getState) => {
  let { name, age } = getState().homeInfo;
  if (name || age) return
  await new Promise(resolve => {
    let homeInfo = { 
      name: 'zura daraselia', 
      age: '26'
    }
    resolve(homeInfo)
  }).then(homeInfo => {
    dispatch({ type: GET_HOME_INFO, data: homeInfo })
  })
}
