import CustomButton from "components/common/customButton";
import PageWrapper from "components/layout/pageWrapper";

import './HeroVideoBanner.scss';

interface BtnItem {
	btnTxt: string,
	onClickBtn: () => void,
	btnStyle?: string
}

interface HeroVideoBannerType {
	linkVideo: string,
	title: string,
	subtitle: string,
	description: string,
	btnList: BtnItem[]
}

const HeroVideoBanner = ({linkVideo, title, subtitle, description, btnList}: HeroVideoBannerType) => {

	return (
		<>
			<div className="hero-video-banner" style={{backgroundImage: `url(${linkVideo})`}}>
				<div className="main-container">
					<PageWrapper>
						<h1 className="title">
							{title}
						</h1>

						<h2 className="subtitle">
							{subtitle}
						</h2>

						<div className="description">
							{description}
						</div>

						<div className="btn-container">
							{btnList.map((item, key) => {
								return(
									<CustomButton
										onClickBtn={item.onClickBtn}
										btnStyle={(item.btnStyle) && item.btnStyle}
										key={key}
									>
										{item.btnTxt}
									</CustomButton>
								)
							})}
						</div>
					</PageWrapper>
				</div>
			</div>
		</>
	);
}

export default HeroVideoBanner;