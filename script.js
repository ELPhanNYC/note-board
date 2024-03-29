let active_tasks = [];
//let task_button = [];
let active_count = 0;
let colors = ["lightblue", "pink", "yellow","#ccccff"];
let current_color = "yellow";
function taskColor(color_index){
    current_color = colors[color_index];
    if(active_tasks.length > 0){
        for(let i of active_tasks){
            i.setAttribute("style","background-color: "+current_color+";");
        }
    }    
}
function delete_div(div_name){
    let div = document.getElementById(div_name);
    //active_tasks.remove(div);
    div.remove();
}
function create_div(){
    let task_text = document.getElementById("task") 
    let new_div = document.createElement("div");
    let div_name =  "task-"+active_count;
    new_div.setAttribute("id",div_name);
    new_div.setAttribute("style","background-color: "+current_color+";");
    let new_p = document.createElement("p");
    let delete_button = document.createElement("button");
    delete_button.setAttribute("class","x")
    //delete_button.setAttribute("style","background-color: "+current_color+";");
    delete_button.onclick = function(){
        delete_div(div_name);
    };
    let x = document.createTextNode("x");
    let new_content = document.createTextNode(task_text["value"]);
    new_p.appendChild(new_content);
    delete_button.appendChild(x);
    new_div.appendChild(delete_button);
    new_div.appendChild(new_p);
    return new_div; 
}
function addTask(){
    //creating the new task
    let new_div = create_div();
    document.body.appendChild(new_div);
    //storing and logging task metadata
    active_tasks.push(new_div)
    console.log(active_tasks)
    active_count += 1;
}
