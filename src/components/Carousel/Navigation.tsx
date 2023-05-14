import { ButtonHTMLAttributes } from "react";
import { useCarouselContext } from "./Context";

export const PrevButton = ({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const { currentSlide, handleSlideChange } = useCarouselContext();

	console.log(currentSlide);

	const isDisabled = currentSlide === 0;

	console.log("disabled", isDisabled);

	return (
		<button
			type="button"
			aria-disabled={isDisabled}
			onClick={() => handleSlideChange(currentSlide - 1)}
			className={
				"c-NavigationButton c-NavigationButtonPrev" +
				(className ? ` ${className}` : "")
			}
			{...props}
		>
			{children}
		</button>
	);
};

export const NextButton = ({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const {
		currentSlide,
		handleSlideChange,
		totalSlides,
		slidesPerView = 1,
	} = useCarouselContext();

	const isDisabled = currentSlide === totalSlides - slidesPerView + 1;

	return (
		<button
			type="button"
			aria-disabled={isDisabled}
			onClick={() => handleSlideChange(currentSlide + 1)}
			className={
				"c-NavigationButton c-NavigationButtonNext" +
				(className ? ` ${className}` : "")
			}
			{...props}
		>
			{children}
		</button>
	);
};
