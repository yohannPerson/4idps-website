import Nav from 'components/layout/nav';
import PageWrapper from 'components/layout/pageWrapper';
import HeroVideoBanner from 'components/common/heroVideoBanner';

import VideoBanner from 'assets/img/tmp-banner.png';

import { useNavigate } from 'react-router-dom';



const Homepage = () => {
    const navigate = useNavigate();

    const bannerBtnList = [
        {
            btnTxt: "TALK WITH US",
            onClickBtn: () => console.log("click btn"),
        }, {
            btnTxt: "SEE OUR SOLUTIONS",
            onClickBtn: () => navigate('/solutions'),
            btnStyle: "custom-2"
        }
    ];

	return (
		<>
			<Nav />
            <HeroVideoBanner
                linkVideo={VideoBanner}
                title="Title"
                subtitle="Subtitle"
                description="Fusce pretium nulla turpis, in faucibus purus dignissim vitae. Aenean volutpat tortor vitae gravida scelerisque. Mauris dolor eros, mattis ut justo non, dapibus viverra mi. Aliquam ultricies a lectus at sodales. Aliquam laoreet in libero vel sagittis. Praesent sed nisi fermentum, tristique urna non, vulputate elit. Fusce turpis lorem, finibus ac velit eu, imperdiet pellentesque turpis. Morbi rutrum mi nec cursus interdum."
                btnList={bannerBtnList}
            ></HeroVideoBanner>
			<PageWrapper>
				<div>This is the homepage</div>
			</PageWrapper>
		</>
	);
}
  
export default Homepage;