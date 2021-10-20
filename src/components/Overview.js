import React from "react"; 
 
const Overview = (props) => {
    const { tasks } = props;
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
 
    return( 
        <div> 
                {tasks.map((task, index) => {
                    return <div key={task.id}>
                        
                            <input 
                                type="checkbox"
                                checked={() => props.handleCompleted(task.id)}
                                onChange={() => props.handleTask(task.id)}
                            />
                        <p style={task.completed? completedStyle : null}>
                            {task.id}
                            {index + 1} {task.text}
                        </p>
                    </div>
                })}
        </div> 
    ) 
    
} 
 
export default Overview