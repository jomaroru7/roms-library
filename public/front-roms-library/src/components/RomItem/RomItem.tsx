interface RomItemProps {
    title: string,
    description: string,
    image: string
}

export const RomItem: React.FC<RomItemProps> = ({ title, description, image}) => {
  return (
    <div className="rom-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <img alt={title} src={image}/>
    </div>
  )
}
