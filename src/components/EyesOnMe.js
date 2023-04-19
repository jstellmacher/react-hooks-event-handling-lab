// jais code
function EyesOnMe() {

    function displayFocus() {
        console.log("Good!");
    }

    function displayBlur() {
        console.log("Hey! Eyes on me!");
    }

    return (
        <button onFocus={displayFocus} onBlur={displayBlur}>Eyes on me</button>
    );
}

export default EyesOnMe;