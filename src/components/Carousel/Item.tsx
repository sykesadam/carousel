import { CSSProperties, ElementType, forwardRef } from "react";
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "@/types";

import "@/styles/Item.css";

const DEFAULT_ELEMENT = "li";

export type ItemProps<T extends ElementType> = PolymorphicComponentPropWithRef<
	T,
	{ slideSize?: number }
>;
export type ItemComponent = <T extends ElementType = typeof DEFAULT_ELEMENT>(
	props: ItemProps<T>
) => React.ReactElement | null;

const Item: ItemComponent = forwardRef(
	<T extends ElementType = typeof DEFAULT_ELEMENT>(
		{ as, children, slideSize, className, style, ...props }: ItemProps<T>,
		ref?: PolymorphicRef<T>
	) => {
		const Component = as || DEFAULT_ELEMENT;

		return (
			<Component
				{...props}
				style={{ ...style, "--slide-size": slideSize } as CSSProperties}
				className={`c-Item ${className || ""}`}
				ref={ref}
			>
				{children}
			</Component>
		);
	}
);

export default Item;
