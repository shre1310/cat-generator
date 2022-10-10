const express = require('express')
const axios = require('axios');
const app = express();

const cat = [{

}]

// app.get('/catgifs', async (req, res)=> {
    
//     try {
//         const result = await axios.get(`https://giphy.com/explore/cat`)
//         console.log(result.data);
//     } catch(err) {
//         console.error(err.message)
//         throw new Error(err)
//     }
// })
app.get('/catgifs', (req, res)=>{
    axios.get('https://giphy.com/explore/cat')
        .then((response) =>{
        const html = response.data
        const $ = cheerio.load(html)
        })
    })



app.listen(1000, (req, res) => console.log(`server listening at ${1000}`))