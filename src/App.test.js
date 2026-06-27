import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders portfolio homepage", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);

	expect(
		screen.getByText(/I like turning ideas into mobile products/i)
	).toBeInTheDocument();
});
