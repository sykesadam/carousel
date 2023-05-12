import "../../Wrapper.css"
import { CSSProperties, ElementType, forwardRef, useState } from "react"

import {
	Carousel as ICarousel,
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
} from "../../types"
import Content from "./Content"
import CarouselContext from "./Context"
import Item from "./Item"
import { NextButton, PrevButton } from "./Navigation"
import Pagination from "./Pagination"

const DEFAULT_ELEMENT = "div"

export type CarouselProps<T extends ElementType> =
	PolymorphicComponentPropWithRef<T, ICarousel>
export type CarouselComponent = <
	C extends ElementType = typeof DEFAULT_ELEMENT
>(
	props: CarouselProps<C>
) => React.ReactElement | null

// @ts-ignore
const Carousel: CarouselComponent & {
	Item: typeof Item
	Content: typeof Content
	NextButton: typeof NextButton
	PrevButton: typeof PrevButton
	Pagination: typeof Pagination
} = forwardRef(
	<T extends ElementType = typeof DEFAULT_ELEMENT>(
		{
			as,
			children,
			className,
			autoplay = false,
			loop = false,
			gap = 0,
			style,
			slidesPerView = 1,
			onSlideChange,
			...props
		}: CarouselProps<T>,
		ref?: PolymorphicRef<T>
	) => {
		const [currentSlide, setCurrentSlide] = useState(0)
		const Component = as || DEFAULT_ELEMENT

		const handleSlideChange = (slideIndex: number) => {
			const slides = document.querySelectorAll(`.c-Item`)

			const targetIndex = Math.max(
				0,
				Math.min(slides.length - 1, slideIndex)
			)
			setCurrentSlide(targetIndex)
			slides[targetIndex]?.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "start",
			})

			if (onSlideChange) onSlideChange(targetIndex, slides[targetIndex])
		}

		return (
			<CarouselContext.Provider
				value={{
					autoplay,
					loop,
					gap,
					slidesPerView,
					currentSlide,
					handleSlideChange,
				}}
			>
				<Component
					{...props}
					style={
						{
							...style,
							"--gap": `${gap}px`,
							"--slides-per-view": slidesPerView,
						} as CSSProperties
					}
					className={`c-CarouselWrapper ${className || ""}`}
					ref={ref}
				>
					{children}
				</Component>
			</CarouselContext.Provider>
		)
	}
)

Carousel.Item = Item
Carousel.Content = Content
Carousel.NextButton = NextButton
Carousel.PrevButton = PrevButton
Carousel.Pagination = Pagination

export default Carousel
