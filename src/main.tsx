import { StrictMode } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./App";

class WebComponent extends HTMLElement {
	connectedCallback() {
		render(
			<StrictMode>
				<App />
			</StrictMode>,
			this
		);
	}

	disconnectedCallback() {
		unmountComponentAtNode(this);
	}
}

const ELEMENT_NAME = "client-extension-react";

if (customElements.get(ELEMENT_NAME)) {
	console.log(`Skipping registration for <${ELEMENT_NAME}> (already registered)`);
} else {
	customElements.define(ELEMENT_NAME, WebComponent);
}
