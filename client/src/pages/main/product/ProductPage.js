import "./ProductPage.css";
import FsLightbox from "fslightbox-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import pin from "../../../assets/images/pin.webp";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../services/providers/redux/featuresSlice";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import NotFound from "../../loading/NotFound";
import FormattedPrice from "../../../utils/FormattedPrice";
import QtyBtn from "../../../components/ui/buttons/QtyBtn";
import { useState } from "react";
import Lightbox from "../../../components/ui/lightbox/Lightbox";
import { AiFillStar } from "react-icons/ai";

function ProductPage() {
  const [toggler, setToggler] = useState(true);
  const dispatch = useDispatch();
  const [product] = useSelector((state) => state.features.show);
  // console.log(product);

  if (product.length <= 0) return <NotFound />;

  const {
    id,
    availabilityStatus,
    brand,
    category,
    description,
    discountPercentage,
    minimumOrderQuantity,
    price,
    qty,
    rating,
    returnPolicy,
    reviews,
    shippingInformation,
    sku,
    stock,
    tags,
    thumbnail,
    images,
    title,
    warrantyInformation,
    weight,
    meta: { qrCode, barcode },
  } = product;
  console.log(product);
  // Calculate discounted price and amount directly
  const discountedAmount = (price * discountPercentage) / 100;
  const oldPrice = price + discountedAmount;
  return (
    <section id="product">
      <div className="container">
        <div className="row product-detail">
          <div className="col-lg-4">
            <div className="img-box">
              <Lightbox thumbnail={thumbnail} images={images} />
            </div>
            <div className="between">
              <QtyBtn id={id} qty={qty} list="show" />
              <Link to="/cart">
                <button
                  className="add"
                  onClick={() => dispatch(addToCart(product))}
                >
                  add to cart
                </button>
              </Link>
            </div>
            <img src={qrCode} alt="" width={200} height={200} />
            <h6>{barcode}</h6>
            <h6>{sku}</h6>
          </div>
          <div className="col-lg-8">
            <article className="text-box">
              <h5 className="brand">{brand}</h5>
              <h4>{title}</h4>
              <span className="dis">
                extra <FormattedPrice amount={discountedAmount} /> discount
              </span>
              <div className="value">
                <h4 className="price">
                  <FormattedPrice amount={price} />
                </h4>
                <del className="old-price">
                  <FormattedPrice amount={oldPrice} />
                </del>
                <span className="dis">{discountPercentage}% off</span>
              </div>
              <div className="rr">
                <span className="rate">
                  <AiFillStar />
                  {rating}
                </span>
                <h6>ratings & {reviews.length} reviews</h6>
              </div>
              <div className="deliver between baseline">
                <div>
                  <h6>
                    <img src={pin} alt="" />
                    deliver to
                  </h6>
                  <form className="flex">
                    <input
                      placeholder="Enter pincode"
                      type="text"
                      maxLength="6"
                      autoComplete="off"
                      // value={pin}
                      // onChange={(e) => setPin(e.target.value)}
                    />
                    <button className="del-btn">check</button>
                  </form>
                </div>
                <h6>services</h6>
                <h6 className="flex">
                  Cash on Delivery available
                  <LiaExclamationCircleSolid style={{ color: "blue" }} />
                </h6>
              </div>
              <h6 className="flex">
                deveverd by {shippingInformation} |
                <strong className="green">free</strong>
                <del className="gray">
                  <FormattedPrice amount={0.5} />
                </del>
                <LiaExclamationCircleSolid style={{ color: "blue" }} />
              </h6>
              <a href="#">view details</a>
              <div className="data">
                <h6>description</h6>
                <p>{description}</p>
                <h6>brand</h6>
                <p>{brand}</p>
                <h6>category</h6>
                <p>{category}</p>
                <h6>availabilityStatus</h6>
                <p>{availabilityStatus}</p>
                <h6>warrantyInformation</h6>
                <p>{warrantyInformation}</p>
                <h6>returnPolicy</h6>
                <p>{returnPolicy}</p>
                <h6>weight</h6>
                <p>{weight}gm</p>
              </div>

              {/* <span>{reviews}</span> */}
              {/* <span>{tags}</span> */}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
