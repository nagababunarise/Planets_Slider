import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="bg-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="heading">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}
export default PlanetItem
