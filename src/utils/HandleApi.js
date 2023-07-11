import axios from "axios"

const baseUrl = "https://backend-repo-todoapp.onrender.com"

const getAllToDo  = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log("data --->", data);
        setToDo(data)
    })
    .catch((err) => console.log(err))
}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const doneToDo = (_id, done,setToDo) => {
    if(done===true){
        done=false
    }
    else{
        done=true
    }
    axios
        .post(`${baseUrl}/done`, { _id,done })
        .then((data) => {
            console.log(data);
            
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}



const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo, doneToDo }