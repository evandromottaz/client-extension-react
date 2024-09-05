import React from "react";

interface Props {
	children: React.ReactNode;
}

export function Button({ children }: Props) {
	return <button type="submit">{children}</button>;
}
