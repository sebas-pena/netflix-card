import { useEffect, useRef, useState } from "react"
import addIcon from "./add_icon.jpg"
import playIcon from "./play_icon.jpg"
import arrowIcon from "./arrow_icon.jpg"
import likeIcon from "./like_icon.jpg"

import videoPreview from "./videoPreview.mp4"

import "./styles.css"

const imageUrl =
	"https://occ-0-405-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaL9L90Nmu8GqP2dTwUc0KVsj6GpuCQhdJ7-XioPq997uUQmOXCM2j4iqGvG_vF6jTjORtC4g8oeEj0U2BU-9dBRN1l_wmrgWUqzOylVLTYgnovC35a1Ybd_k5s2WnyDq5nP.jpg?r=350"

const Card = ({ cardInfo }) => {
	const [isHover, setIsHover] = useState(false)

	const cardRef = useRef(null)

	useEffect(() => {
		const handleMouseOver = () => {
			console.log("entro")
			setIsHover(true)
		}
		const handleMouseOut = () => {
			console.log("salio")
			setIsHover(false)
		}
		if (cardRef.current) {
			cardRef.current.addEventListener("mouseover", handleMouseOver)
			cardRef.current.addEventListener("mouseout", handleMouseOut)
		}

		return () => {
			cardRef.current.removeEventListener("mouseover", handleMouseOver)
			cardRef.current.removeEventListener("mouseout", handleMouseOut)
		}
	}, [cardRef])

	return (
		<div
			className="card__ctn"
			ref={cardRef}
			style={{ zIndex: isHover ? 10 : 1 }}
		>
			<header className="card__header">
				{isHover ? (
					<video src={videoPreview} autoPlay width="350" />
				) : (
					<img src={imageUrl} />
				)}
			</header>
			<div className="card__body">
				<div className="card__actions">
					<img src={playIcon} alt="play" />
					<img src={addIcon} alt="add to favorites" />
					<img src={likeIcon} alt="like" />
					<img src={arrowIcon} alt="more" />
				</div>
				<div className="card__details">
					<p className="card__match">98% para ti</p>
					<p className="card__calification">13+</p>
					<p className="card__seasons">1 temporada</p>
					<p className="card__video-quality">HD</p>
				</div>
				<ul className="card__tags">
					<li>
						<p>Telenovesco</p>
					</li>
					<li>
						<p>Inspirador</p>
					</li>
					<li>
						<p>Telenovela</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Card
