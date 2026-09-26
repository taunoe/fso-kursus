
const App = () => {
  console.log("App")
  const name = 'Kadri'
  const color = 'roheline'

  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>Hello world</p>
      <Hello name='Regiina' color='must'/>
      <Hello name={name} color={color}/>
      <p>Nimi: {friends[0].name}, vanus: {friends[0].age}</p>
      <p>Nimi: {friends[1].name}, vanus: {friends[1].age}</p>
    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Tere {props.name}, sinu värv on {props.color}!</p>
    </div>
  )
}

export default App