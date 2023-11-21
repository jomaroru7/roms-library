interface RomItemProps {
    title: string,
    description: string,
    image: string
}

export const RomItem: React.FC<RomItemProps> = ({ title, description, image}) => {
  const backgroundImage = {
    backgroundImage: "url("+image+")",
  }
  return (
    <div className="rom-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Hover here</span>
        <div className="pic" style={backgroundImage}></div>
        {/* <img alt={title} src={image}/> */}
        <button></button>
    </div>
  )
}
