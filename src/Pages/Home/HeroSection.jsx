export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Atharva Bankar</p>
                    <h1 className="hero--section--title"><span className="hero--section--title--color">Full Stack</span>{" "}
                    <br />
                    Developer
                    </h1>
                    <p className="hero--section--decription">
                    "Crafting digital experiences from front-end finesse to back-end brilliance."
                        <br />
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero--section--img"><img src="./img/hero1_img.jpg" alt="Hero Section" /></div>
        </section>  
    );
}