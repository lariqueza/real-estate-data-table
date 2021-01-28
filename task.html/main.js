fetch('https://70c5b72c-65db-4a66-ba01-3e14763157e8.mock.pstmn.io/posts')
    .then(res => {
        console.log("RESPONSE, WAITING TO PARSE...", res)
        return res.json()
    })
    .then(data => {
        console.log("DATA PARSED...", data)
    })
    .catch(e => {
        console.log("OH NO ERROR!", e)
    })