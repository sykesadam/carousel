import { ReactNode } from "react"

import { useCarouselContext } from "./Context"

export type ButtonProps = {
	children: ReactNode
}

export const NextButton = ({ children }: ButtonProps) => {
	const { currentSlide, handleSlideChange } = useCarouselContext()

	return (
		<button
			type="button"
			onClick={() => handleSlideChange(currentSlide + 1)}
		>
			{children}
		</button>
	)
}

export const PrevButton = ({ children }: ButtonProps) => {
	const { currentSlide, handleSlideChange } = useCarouselContext()

	return (
		<button
			type="button"
			onClick={() => handleSlideChange(currentSlide - 1)}
		>
			{children}
		</button>
	)
}
