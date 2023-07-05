import { ReactNode } from 'react';

import './CustomButton.scss';

interface CustomButtonType {
	children: ReactNode,
	onClickBtn: () => void,
	btnStyle?: string
}

const CustomButton = ({children, onClickBtn, btnStyle}: CustomButtonType) => {
	return (
		<>
			<button
				className={`btn ${(btnStyle)? btnStyle: 'custom-1'}`}
				onClick={() => onClickBtn()}
			>
				{children}
			</button>
		</>
	);
}

export default CustomButton;