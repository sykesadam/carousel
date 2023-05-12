import { useCarouselContext } from "./Context"

const Pagination = () => {
	const { slidesPerView } = useCarouselContext()

	return (
		<nav>
			<ol></ol>
		</nav>
	)
}

export default Pagination
