import { generateRandomColor } from '../../helpers/generateRandomColor';
import { sanitizeString } from '../../helpers/sanitizeString';
interface RomItemProps {
  id: number
  title: string,
  description: string,
  image: string
}

export const RomItem: React.FC<RomItemProps> = ({ id, title, description, image }) => {
  const backgroundImage = {
    backgroundImage: "url(" + image + ")",
  }

  const buttonBackgroundColor ={
    backgroundColor: generateRandomColor(),

  }

  return (
    <div className="rom-card">
      <h2>{sanitizeString(title)}</h2>
      <p>{sanitizeString(description)}</p>
      <div className="pic" style={backgroundImage}></div>
      <button style={buttonBackgroundColor}></button>
    </div>
  )
}
