import { GetNewRoms } from "../../types"

interface RomsPaginationProps {
    getNewRoms: GetNewRoms,
}

export const RomsPagination: React.FC<RomsPaginationProps> = ({getNewRoms}) => {
  return (
    <div>RomsPagination</div>
  )
}
