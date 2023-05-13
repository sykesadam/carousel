import "../../Content.css"
import { ElementType, useEffect, useRef } from "react"

import { useIntersectionObserver } from "../../hooks"
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "../../types"
import { useCarouselContext } from "./Context"

const DEFAULT_ELEMENT = "ol"

export type ContentProps<T extends ElementType> =
	PolymorphicComponentPropWithRef<T>
export type ContentComponent = <T extends ElementType = typeof DEFAULT_ELEMENT>(
	props: ContentProps<T>
) => React.ReactElement | null

const Content: ContentComponent = <
	T extends ElementType = typeof DEFAULT_ELEMENT
>({
	as,
	children,
	className,
}: ContentProps<T>) => {
	const Component = as || DEFAULT_ELEMENT
	const {
		currentSlide,
		handleSlideChange,
		totalSlides,
		slidesPerView = 1,
		autoplay,
		loop,
	} = useCarouselContext()
	const ref = useRef<PolymorphicRef<T>>(null)
	const entry = useIntersectionObserver(ref, {})
	const isVisible = !!entry?.isIntersecting

	// autoplay functionality
	useEffect(() => {
		if (!autoplay) return

		let interval: number | undefined = undefined

		if (isVisible) {
			console.log("hej")

			interval = setInterval(() => {
				const slideTarget =
					currentSlide + 1 <= totalSlides - slidesPerView + 1
						? currentSlide + 1
						: 0

				console.log(slideTarget)
				handleSlideChange(slideTarget)
			}, autoplay)
		} else {
			interval && clearInterval(interval)
		}

		return () => {
			if (interval) return clearInterval(interval)
		}
	}, [isVisible, currentSlide, totalSlides, slidesPerView])

	return (
		<Component ref={ref} className={`c-Content ${className || ""}`}>
			{children}
		</Component>
	)
}

export default Content
