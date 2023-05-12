import "../../Content.css"
import { ElementType, forwardRef } from "react"

import { PolymorphicComponentPropWithRef, PolymorphicRef } from "../../types"

const DEFAULT_ELEMENT = "ol"

export type ContentProps<T extends ElementType> =
	PolymorphicComponentPropWithRef<T>
export type ContentComponent = <T extends ElementType = typeof DEFAULT_ELEMENT>(
	props: ContentProps<T>
) => React.ReactElement | null

const Content = forwardRef(
	<T extends ElementType = "ol">(
		{ as, children, className }: ContentProps<T>,
		ref?: PolymorphicRef<T>
	) => {
		// const { gap, slidesPerView } = useCarouselContext()
		const Component = as || "ol"

		return (
			<Component ref={ref} className={`c-Content ${className || ""}`}>
				{children}
			</Component>
		)
	}
)

export default Content
