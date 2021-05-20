import classes from "./Weather.module.css";

const Weather = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>{props.weatherInfo.name}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${props.weatherInfo.icon}.png`}
          alt="Icon"
        />
      </div>
      <div className={classes.temp}>{props.weatherInfo.temp} F</div>
      <div>{props.weatherInfo.description}</div>
    </div>
  );
};
export default Weather;
