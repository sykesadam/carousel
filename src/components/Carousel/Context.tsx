import { createContext, useContext } from "react"

import { ICarousel } from "../../types"

type CarouselFunctionality = {
	currentSlide: number
	handleSlideChange: (slide: number) => void
}

const CarouselContext = createContext<
	(ICarousel & CarouselFunctionality) | null
>(null)

export function useCarouselContext() {
	const context = useContext(CarouselContext)
	if (!context) {
		throw new Error(
			"Carousel.* component must be rendered as child of Carousel component"
		)
	}
	return context
}

export default CarouselContext
