
import "./banner.css";


export default function Banner({banner}) {
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
