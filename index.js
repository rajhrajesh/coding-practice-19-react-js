import {Component} from 'react'
import './index.css'
const initialState = {
  isTimer Running: false,
  timeElapsedInSeconds: 0,
  timerLimitInMinutes: 25,
}
class DigitalTimer extends Component {
  state = initialState
  componentWillUnmount() {
    this.clearTimerInterval()
  }

clearTimerInterval = () clearInterval(this.intervalId)
onDecreaseTimerLimitInMinutes = () = {
  const {timerLimitInMinutes} = this.state I
  if (timerlimitInMinutes > 1) {
    this.setState(prevState => ({
      timerLimitInMinutes: prevState.timerLimitInMinutes 1,
    }))
  }
}

onIncreaseTimerLimitInMinutes = () ⇒
  this.setState(prevState => ({
    timerLimitInMinutes: prevState.timerLimitInMinutes + 1,
  }))
renderTimerLimitController = () ⇒ {
  const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
  const isButtonsDisabled = timeElapsedInSeconds > 0

return
  <div className="timer-limit-controller-container">
    <p className="limit-label">Set Timer limit</p>
    <div className="timer-limit-controller">
      <button
        className="limit-controller-button"
        disabled={isButtonsDisabled}
        onClick={this.onDecreaseTimerLimitInMinutes}
        type="button"> -
      </button>
      
      <div className="limit-label-and-value-container">
        <p className="limit-value">{timerLimitInMinutes}</p>
      </div>
          <button
            className="limit-controller-button"
            disabled={is Buttons Disabled}
            onClick={this.onIncreaseTimerLimitInMinutes}
            type="button"> +
          </button>
        </div>
      </div>
  )
}


  onResetTimer = () ⇒ {
    this.clearTimerInterval()
    this.setState(initialState)
  }
  incrementTimeElapsedInSeconds = () ⇒ {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

  if (isTimerCompleted) {
    this.clearTimerInterval()
    this.setState({isTimer Running: false})
  } else {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    })) I
  }
}
onStartOrPauseTimer = () ⇒ {
  const {
    isTimerRunning,
    timeElapsedInSeconds,
    timerLimitInMinutes,
  } = this.state
  const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

  if (isTimerCompleted) {
    this.setState({timeElapsedInSeconds: 0})
  }
  if (isTimerRunning) {
    this.clearTimerInterval()
  } else {
    this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
  } 
  this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
}
renderTimerController = () =⇒ > {
  const {isTimerRunning} = this.state
  const startOrPauseImageUrl = isTimer Running
    ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
  const startOrPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'

return (
  <div className="timer-controller-container">
    <button
      className="timer-controller-btn"
      onClick={this.onStartOrPauseTimer}
      type="button"
      <img
        alt= {startOrPauseAltText}
        className="timer-controller-icon"
        src={startorPauseImageUrl}/>
      <p className="timer-controller-label">
        {isTimerRunning ? 'Pause' : 'Start'}
      </p>
    </button>

      <button
        className="timer-controller-btn"
        onClick={this.onResetTimer}
        type="button"
        <img
          alt="reset icon"
          className="timer-controller-icon" 
          src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" />
        <p className="timer-controller-label"> Reset </p>
      </button>
    </div>
  )
}

  getElapsedSecondsInTimeFormat = () ⇒ {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
const totalRemaining Seconds =
      timerLimitInMinutes 60 - timeElapsedInSeconds
 const minutes = Math.floor(totalRemainingSeconds / 60)
const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringified Minutes minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds: `0${seconds} I
    return `${stringifiedMinutes}:${stringifiedSeconds}
  }
  render() {
    const {isTimer Running} = this.state
    const labelText = isTimerRunning ? 'Running': 'Paused'


    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="digital-timer-container">
          <div className="timer-display-container">
            <div className="elapsed-time-container">
              <h1 className="elapsed-time">
                {this.getElapsedSeconds InTimeFormat()}
              </h1>
              <p className="timer-state">{labelText}</p>
            </div>
          </div>
          <div className="controls-container">
            {this.renderTimerController()}
            {this.renderTimerLimitController()}
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer






  
