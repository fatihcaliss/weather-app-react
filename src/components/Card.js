
export const Card = ({ temp, condition, desc, icon, time }) => {
    return (
        <div className="card">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={desc} />
            <div>
                <p id="time">{time}</p>
                <p>{Math.round(temp)} ℃</p>
                <p>{condition}</p>
                <p>{desc}</p>
            </div>
        </div>
    )
}