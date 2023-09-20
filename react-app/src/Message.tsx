

//PascakCasubg

function Message(){
    

    const name=getname();
    if(name)
    return <h1>Hello ,{name}</h1>;
    return <h1>Hello World</h1>;
}


function getname(){
    return "VIjay"
}

export default Message;