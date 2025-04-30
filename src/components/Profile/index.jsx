import "./styles.css"
export default function Profile({ nome, idade, profissão, foto}) {
    return (
        <>
            <img src= {foto} />
            <h2>{nome}</h2>
            <p>Idade: {idade} </p>
            <p>Profissão: {profissão} </p>
            <hr />
        </>
    )
}
