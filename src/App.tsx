import "./App.css"
import Carousel from "./components/Carousel"

function App() {
	return (
		<>
			<Carousel
				gap={16}
				slidesPerView={2}
				onSlideChange={(slide, target) =>
					console.log("test", slide, target)
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
	)
}

export default App
