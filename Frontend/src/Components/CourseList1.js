import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap components
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import Nav  from './Nav'
import Footer from "./Footer";
const CourseList1 = ({cartCount,handleLogout}) => { 
  const [count, setCount] = useState(0);
  // State to track purchased courses
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  // State to track which course was selected for purchase
  const [selectedCourse, setSelectedCourse] = useState(null);

  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);

  // State to track if all courses should be unblurred after a purchase
  const [isAllPurchased, setIsAllPurchased] = useState(false);

  //payment navigation
  const navigate = useNavigate();

  // State to track individual course information
  const handleAddToCart = () => {
    // Logic to add course to cart
    // console.log(Course ${selectedCourse} added to cart!);
    setShowModal(false);
    navigate("/addcart"); // Redirect to any other page on cancel
  };
  const [courseInfo, setCourseInfo] = useState({
    1: { duration: "10h 56m", lectures: "82 lectures", level: "Beginner" },
    2: { duration: "6h 20m", lectures: "60 lectures", level: "Intermediate" },
    3: { duration: "12h 15m", lectures: "100 lectures", level: "Advanced" },
    4: { duration: "12h 15m", lectures: "100 lectures", level: "Advanced" },
    5: { duration: "12h 15m", lectures: "100 lectures", level: "Advanced" },
    6: { duration: "12h 15m", lectures: "100 lectures", level: "Advanced" },
  });

  // Dummy course data
  const courses = [
    {
      id: 1,
      title: <Link to="/networkingvideo">SEO</Link>,
      imgSrc: "assets/images/videos/360p.mp4",
      type: "video",
    },
    { id: 2, title: "SMM", imgSrc: "assets/images/courses/4by3/SMM.png" },
    {
      id: 3,
      title: "Digital Marketing",
      imgSrc: "assets/images/courses/4by3/DM.png",
    },
    { id: 4, title: "SMM", imgSrc: "assets/images/courses/4by3/SMM.png" },
    { id: 5, title: "SMM", imgSrc: "assets/images/courses/4by3/SMM.png" },
    { id: 6, title: "SMM", imgSrc: "assets/images/courses/4by3/SMM.png" },
  ];

  // Show modal when a course is clicked
  const handleShowModal = (courseId) => {
    setSelectedCourse(courseId);
    setShowModal(true);
  };

  // Handle purchase and unblur all courses after a purchase
  const handlePurchase = () => {
    setPurchasedCourses([...purchasedCourses, selectedCourse]);
    setIsAllPurchased(true); // Unblur all courses after purchase
    setShowModal(false);
    navigate("/checkout"); // Redirect to payment page after purchase
  };
  const handleCancel = () => {
    setShowModal(false);
    navigate("/someotherpage"); // Redirect to any other page on cancel
  };
  const [cartItems, setCartItems] = useState(0); // Cart items count

  // Simulate adding a product to the cart
  const addToCart = () => {
    setCartItems(cartItems + 1); // Increase cart count by 1
  };

  return (
   <>
   <Nav cartCount={cartCount} handleLogout={handleLogout} />
    <div>
      <br />
      <br />
    
      <section
        className="bg-dark align-items-center mt-5 d-flex"
        style={{
          background:
            "url(assets/images/pattern/04.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white">Course List</h1>
              <div className="d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Courses
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Digital Marketing
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .blur-content {
          filter: blur(5px);
          opacity: 0.5;
        }
        .card:hover {
          cursor: pointer;
        }
      `}</style>

      <section className="pt-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {courses.map((course, index) => (
              <div className="col-lg-10 col-xxl-6" key={course.id}>
                <div
                  className={`card rounded overflow-hidden shadow ${
                    isAllPurchased || index < 3 ? "" : "blur-content"
                  }`}
                  onClick={() =>
                    index >= 3 &&
                    !purchasedCourses.includes(course.id) &&
                    handleShowModal(course.id)
                  }
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <video
                        src={course.imgSrc}
                        controls
                        width="100%"
                        height="auto"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between mb-2">
                          <h5 className="card-title mb-0">{course.title}</h5>
                          <a href="#">
                            <i className="fas fa-heart text-danger" />
                          </a>
                        </div>
                        <ul className="list-inline mb-1">
                          <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                            <i className="far fa-clock text-danger me-2 mt-3" />
                            {courseInfo[course.id]?.duration}
                          </li>
                          <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                            <i className="fas fa-table text-orange me-2 mt-3" />
                            {courseInfo[course.id]?.lectures}
                          </li>
                          <li className="list-inline-item h6 fw-light">
                            <i className="fas fa-signal text-success me-2 mt-3" />
                            {courseInfo[course.id]?.level}
                          </li>
                        </ul>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="sticky-bottom bg-white p-2"
              style={{ zIndex: 1000 }}
            >
              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  onClick={handlePurchase}
                  style={{ marginRight: "10px" }}
                >
                  Buy Now
                </Button>
                {/* Button to simulate product click and add to cart */}
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                 
                >
                  Add to Cart
                </Button>
                {/* <button
                  onChange={() => {
                    setCount(count + 1);
                  }}
                >
                  {count}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Buy Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to buy this course?</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button> */}
          <Button variant="primary" onClick={handlePurchase}>
            Buy Now
          </Button>
          {/* Button to simulate product click and add to cart */}
          <Button
                  variant="primary"
                  onClick={handleAddToCart}
                 
                >
                  Add to Cart
                </Button>
          {/* <button
            onChange={() => {
              setCount(count + 1);
            }}
          >
            {count}
          </button> */}
        </Modal.Footer>
      </Modal>
      <Footer/>
    </div>
   </>
  );
};

export default CourseList1;