
import "./banner.css";
type BannerProps = {
  banner: string;
};

export default function Banner({banner}: BannerProps) {
  return (
    <div>
      <div className="container">
        <div className="banner">
            <img className="img-banner" src={banner} alt="" />        
        </div>
      </div>
    </div>
  );
}
