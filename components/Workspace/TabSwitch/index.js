import styles from './styles.module.css'
import TodoList from '../TodoList'
import Pomodoro from '../Pomodoro'
import React, {setState} from 'react'

const DATA = [];

class TabSwitch extends React.Component {

    constructor(props) {
        super(props)
        this.state={
          pomodoro:false
        }
      }

      ShowFn() {
        this.setState({
            pomodoro:true
        })
      }
    
      HideFn() {
        this.setState({
            pomodoro:false
        })
      }

      
render() {
    return (
        <div className="d-flex justify-content-center text-center">
            <div className={styles.mainContainer}>
                <div  className="d-flex justify-content-center text-center">
                    <div className={styles.tabBox}>
                        <div className="d-flex justify-content-center">
                            <div onClick={() => this.HideFn()} className={styles.pomodoroTab}>
                            To-do List
                            </div>
                        </div>
                        <div className="">
                            <div onClick={() => this.ShowFn()} className={styles.todolistTab}>
                                    Pomodoro
                            </div>
                        </div>
                        <div className={styles.trackerTab}>
                                    Tracker
                            </div>
                    </div>
                    
                    <div className={styles.tool1}>
                    <TodoList tasks={DATA}></TodoList>

                    {this.state.pomodoro?<div className={styles.tool2}>
                        <Pomodoro></Pomodoro>
                    </div>:null}
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default TabSwitch;