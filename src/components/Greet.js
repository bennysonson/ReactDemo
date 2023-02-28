/* function Greet() {
    return <h1>Hello Benson</h1>
} */

const Greet = ({name, hiddenName}) => {
    return (
        <div>
            <h1>Hello {name}, AKA {hiddenName}</h1>
        </div>
    )
}
export default Greet