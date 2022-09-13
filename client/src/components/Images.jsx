import React from "react";

const Images = ({ images }) => {
	return (
		<div className="images">
			{images.map((image) => {
				return (
					<div
						className="image"
						style={{
							backgroundImage: `url(${image.img})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					>
						<div className="czorny"></div>
					</div>
				);
			})}
		</div>
	);
};

export default Images;
