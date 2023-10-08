import swal from 'sweetalert';

const getValue =()=>{
    const cards = localStorage.getItem('card')
    if(cards){
        return JSON.parse(cards)
    }
    else{
        return []
    }

}
const setValue = id =>{
    const data = getValue()
    const exist = data.find(dataid => dataid == id)
    if(!exist){
        data.push(id)
        localStorage.setItem('card', JSON.stringify(data))
        swal("Good job!", "You just added to your BookMark list!", "success")
        // alert('You are Added')
    }
    else{
        swal("Error!", "You just added to your BookMark list!", "error")
    }
}

export {setValue, getValue}