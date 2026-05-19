import { useParams } from 'react-router-dom'
import Shop from './Shop.jsx'
import BrandLanding from './BrandLanding.jsx'
import { hasBrandLanding } from '../data/brandLandings.js'

/** Route resolver: render Apple-style brand landing if we have config for the
 *  category, otherwise fall through to the standard Shop grid. */
export default function CategoryRoute() {
  const { category } = useParams()
  return hasBrandLanding(category) ? <BrandLanding /> : <Shop />
}
