import Carousel from "./components/Carousel";

import "@/styles/App.css";

function App() {
	return (
		<>
			<Carousel
				// autoplay={1500}
				totalSlides={4}
				gap={16}
				slidesPerView={2}
				onSlideChange={(targetSlideIndex, targetSlide) =>
					console.log("test", targetSlideIndex, targetSlide)
				}
			>
				<div className="c-Navigation">
					<Carousel.PrevButton>Prev</Carousel.PrevButton>
					<Carousel.NextButton>NEXT</Carousel.NextButton>
				</div>
				<Carousel.Content>
					<Carousel.Item
						style={{
							height: "150px",
							backgroundColor: "red",
							padding: "1rem",
						}}
					>
						1
					</Carousel.Item>
					<Carousel.Item
						style={{
							height: "150px",
							backgroundColor: "red",
							padding: "1rem",
						}}
					>
						2
					</Carousel.Item>
					<Carousel.Item
						slideSize={1}
						style={{
							height: "150px",
							backgroundColor: "red",
							padding: "1rem",
						}}
					>
						3
					</Carousel.Item>
					<Carousel.Item
						style={{
							height: "150px",
							backgroundColor: "red",
							padding: "1rem",
						}}
					>
						4
					</Carousel.Item>
				</Carousel.Content>
			</Carousel>
		</>
	);
}

export default App;
