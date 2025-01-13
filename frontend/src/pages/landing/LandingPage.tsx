import Navbar from './Navbar';
import c from '@styles/landingPage.module.css';
import Section from './Section';
import InfoItem from './InfoItems';
import Footer from './Footer';
import HomeBanner from '@assets/images/landingPageImgs/home-banner-background.png';
import BannerFood from '@assets/images/landingPageImgs/home-banner-image.png';
import AboutFoodImg from '@assets/images/landingPageImgs/about-background-image.png';
import AboutBanner from '@assets/images/landingPageImgs/about-background.png';
import PickMeal from '@assets/images/landingPageImgs/food.png';
import AddToCart from '@assets/images/landingPageImgs/mobile-shopping.png';
import Delivery from '@assets/images/landingPageImgs/fast-delivery.png';
import Phone from '@assets/images/landingPageImgs/telephone (2).png';
import Mail from '@assets/images/landingPageImgs/mail.png';
import Clock from '@assets/images/landingPageImgs/clock.png';
import Location from '@assets/images/landingPageImgs/pin-icon.png';

export default function LandingPage(){
    const openAllMealsPage = () =>{
        window.location.href = '/auth/login'; //treba samo stavit putanju na jelovnik kad bude gotov
    };
    return(
        <div className={c.landingPage}>
            
            <div className={c.homeBannerImg}>
                <img src={HomeBanner} alt="banner" />
            </div>  
            <Navbar/>
            <Section                 
                h3="Your Favourite Food
                    Delivered Hot &
                    Fresh"
                p="Healthy switcher chefs do all the prep work, like 
                    peeding, chopping & marinating, so you can cook
                    a fresh food."
                buttonText="Order Now"
                buttonAction={openAllMealsPage}
                imgUrl={BannerFood}
                id="home-section"
            />

            <Section      
                title='ABOUT US'           
                h3="Bringing Flavor to Your Table"
                p="We are passionate about providing an unforgettable dining experience with every meal. 
                Our mission is to deliver high-quality, delicious food made from fresh, locally sourced ingredients."
                buttonText="Explore Our Menu"
                buttonAction={openAllMealsPage}
                imgUrl={AboutFoodImg}
                id="about-section"

            >             
                <div className={c.aboutDecoration}>
                    <img src={AboutBanner} alt="aboutbanner" />
                </div>
            </Section>

            <Section      
                title='WORK'           
                h3="How It Works"
                p="Browse our menu to explore a wide range of delicious options. Once you've found your favorites, select them and proceed to place your order. 
                After that, just sit back and relax as we prepare your meal, and enjoy it delivered hot and fresh right to your door."   
                id="work-section"
  
            >         
                <div className={c.workSection}>    
                    <InfoItem 
                        imgUrl={PickMeal}
                        header='Pick Meals'
                        description='Browse our menu, and select your favourites.'    
                    />
                    <InfoItem 
                        imgUrl={AddToCart}
                        header='Review cart and buy'
                        description='Add to cart and view before closing the order'    
                    />
                    <InfoItem 
                        imgUrl={Delivery}
                        header='Fast Deliveries'
                        description="Once you see confirmation screen only thing you can do 
                        is relax and wait for your delivery to arrive hot and fresh at your door." 
                    />
                </div>
            </Section>
            <Section
                title='CONTACT'           
                h3="You need more info?"
                p="Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam."  
                id="contact-section"

            >
                <div className={c.contactItems}>
                    <InfoItem 
                        imgUrl={Phone}
                        header='Phone'
                        description='+385 91 900 9000'    
                    />
                    <InfoItem 
                        imgUrl={Mail}
                        header='E-mail'
                        description='foodhub@info.com'    
                    />
                    <InfoItem 
                        imgUrl={Location}
                        header='Location'
                        description='Split, Ruđera Boškovića 32'    
                    />
                    <InfoItem 
                        imgUrl={Clock}
                        header='Working hours'
                        description='08:00 - 22:00'    
                    />
                </div>

            </Section>
            <Footer></Footer>

        </div>
    );
}