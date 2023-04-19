// Jais code

function Keypad() {

    function displayChange() {
        console.log('Entering password...');
    }

    return (
        <div>
            <input type="password" onChange={displayChange}></input>
        </div>
    )
}

export default Keypad;