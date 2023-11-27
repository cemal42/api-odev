import axios, { all } from "axios";

export default async function getData (user_id) {
    const allData = []
    const {data:user} = await axios.get('https://jsonplaceholder.typicode.com/users/'+user_id)

    const {data:post} = await axios.get('https://jsonplaceholder.typicode.com/posts?userId='+user_id)

    allData.push(user, post)
    console.log(allData)
}