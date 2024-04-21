export function MouseClicker () {

    function handleButton (event) {
        console.log(event.target.name);
    }

    function printSrc (event) {
        console.log(event.currentTarget.src);
    }

    return (
        <div>
            <button name="one" onClick={handleButton}><img src="https://www.pexels.com/it-it/foto/persona-mano-spazio-sporco-7662853/" onClick={printSrc}></img>Mouse Cliker</button>
        </div>
    )
}