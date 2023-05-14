import { CSSProperties, ElementType, forwardRef, useState } from "react";
import {
	ICarousel,
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
} from "@/types";
import Content from "./Content";
import CarouselContext from "./Context";
import Item from "./Item";
import { NextButton, PrevButton } from "./Navigation";
import Pagination from "./Pagination";

import "@/styles/Wrapper.css";

const DEFAULT_ELEMENT = "div";

export type CarouselProps<T extends ElementType> =
	PolymorphicComponentPropWithRef<T, ICarousel>;
export type CarouselComponent = <
	T extends ElementType = typeof DEFAULT_ELEMENT
>(
	props: CarouselProps<T>
) => React.ReactElement | null;

const CarouselRoot: CarouselComponent = forwardRef(
	<T extends ElementType = typeof DEFAULT_ELEMENT>(
		{
			as,
			totalSlides,
			children,
			className,
			autoplay,
			loop = false,
			gap = 0,
			style,
			slidesPerView = 1,
			onSlideChange,
			...props
		}: CarouselProps<T>,
		ref?: PolymorphicRef<T>
	) => {
		const [currentSlide, setCurrentSlide] = useState(0);
		const Component = as || DEFAULT_ELEMENT;

		const handleSlideChange = (slideIndex: number) => {
			const slides = document.querySelectorAll(`.c-Item`);
			const targetIndex = Math.max(
				0,
				Math.min(slides.length - 1, slideIndex)
			);

			console.log("target", targetIndex);

			slides[targetIndex]?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start",
			});
			setCurrentSlide(targetIndex);
			if (onSlideChange) onSlideChange(targetIndex, slides[targetIndex]);
		};

		return (
			<CarouselContext.Provider
				value={{
					totalSlides,
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
					className={
						"c-CarouselWrapper" + (className ? ` ${className}` : "")
					}
					ref={ref}
				>
					{children}
				</Component>
			</CarouselContext.Provider>
		);
	}
);

const Carousel = Object.assign(CarouselRoot, {
	Item,
	Content,
	PrevButton,
	NextButton,
	Pagination,
});

export default Carousel;
