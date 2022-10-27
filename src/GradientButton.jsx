const buttons = [
    "button_one",
    "button_two",
    "button_three"
]



const GradientButton = () =>{
    return (
        <div>
            {buttons.map((s) => <button className ="btn-grad" value={s} key={s}/>)}
        </div>
    );
}

export default GradientButton;