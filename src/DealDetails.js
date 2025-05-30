import React, { useState } from "react";
import {
  Tab,
  Nav,
  Row,
  Col,
  Image,
  Card,
  Breadcrumb,
  Button,
} from "react-bootstrap";
import {
  Building,
  GeoAlt,
  Clock,
  Bookmark,
  Share,
  ArrowLeft,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import dealImage1 from "./assets/images/deal.jpg";
import dealImage2 from "./assets/images/values.avif";

const dealData = {
  images: [dealImage1, dealImage2],
  name: "Amazing Real Estate Deal",
  id: "DEAL-12345",
  publisher: "John Doe",
  amount: "$5,000,000",
  company: {
    name: "Modern Properties",
    location: "742 Evergreen Terrace, Springfield, NY, USA",
    about:
      "Modern Properties is a leading real estate firm specializing in high-value commercial and residential spaces across metropolitan areas. Our mission is to unlock exceptional investment opportunities.",
  },
  details: "This deal includes a commercial property in downtown New York.",
  description:
    "Keywords: Commercial, Downtown, Investment, NY\n\nThis deal offers a unique opportunity to invest in prime real estate.",
  attachments:
    "Milestone 1: Initial agreement signed\nMilestone 2: Due diligence complete\nAttachment: Contract.pdf",
  broker: "Broker: Jane Smith\nContact: jane.smith@example.com",
  charity:
    "A percentage of the proceeds will be donated to local charities supporting housing and education.",
};

export default function DealDetails() {
  const [selectedImage, setSelectedImage] = useState(dealData.images[0]);

  return (
    <div className="container my-5 px-3" style={{ maxWidth: "1400px" }}>
      {/* Breadcrumb and Back */}
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Deals</Breadcrumb.Item>
          <Breadcrumb.Item active>{dealData.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Button variant="outline-secondary" size="sm">
          <ArrowLeft className="me-1" />
          Back
        </Button>
      </div>

      <Row>
        {/* Left Side: Image + Deal Info + Tabs */}
        <Col md={8}>
          {/* Bordered Card for Image + Deal Info */}
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Row>
                <Col md={5} className="d-flex flex-column align-items-center">
                  <Image
                    src={selectedImage}
                    alt="Main Deal"
                    fluid
                    rounded
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <div className="d-flex gap-2">
                    {dealData.images.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        thumbnail
                        onClick={() => setSelectedImage(img)}
                        style={{
                          width: "55px",
                          height: "40px",
                          objectFit: "cover",
                          cursor: "pointer",
                          border:
                            selectedImage === img
                              ? "2px solid #0d6efd"
                              : "1px solid #ccc",
                        }}
                      />
                    ))}
                  </div>
                </Col>

                <Col md={7}>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="fw-bold mb-0">{dealData.name}</h4>
                    <div className="d-flex gap-2">
                      <Bookmark className="text-primary" size={20} title="Bookmark" />
                      <Share className="text-secondary" size={20} title="Refer Deal" />
                    </div>
                  </div>
                  <div className="text-muted mb-1">Deal ID: {dealData.id}</div>
                  <div className="mb-2">
                    <strong>Published by:</strong> {dealData.publisher}
                  </div>
                  <div className="h4 fw-bold text-primary">{dealData.amount}</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Tabs below the card */}
          <Tab.Container defaultActiveKey="deal-details">
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="deal-details">Deal Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="description-keywords">
                  Description & Keywords
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="attachments-milestones">
                  Attachments & Milestones
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="broker-details">Broker Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="charity-details">Charity Details</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "0 0 6px 6px",
                minHeight: "200px",
                whiteSpace: "pre-line",
              }}
            >
              <Tab.Pane eventKey="deal-details">{dealData.details}</Tab.Pane>
              <Tab.Pane eventKey="description-keywords">
                {dealData.description}
              </Tab.Pane>
              <Tab.Pane eventKey="attachments-milestones">
                {dealData.attachments}
              </Tab.Pane>
              <Tab.Pane eventKey="broker-details">{dealData.broker}</Tab.Pane>
              <Tab.Pane eventKey="charity-details">{dealData.charity}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>

        {/* Right Side: Company Info + About + Time Left */}
        <Col md={4} className="mt-md-0 mt-4">
          <div className="border p-3 rounded shadow-sm bg-light">
            <div className="d-flex align-items-center mb-2">
              <Building className="me-2 text-primary" size={20} />
              <h5 className="mb-0">{dealData.company.name}</h5>
            </div>
            <div className="text-muted d-flex align-items-start mb-3">
              <GeoAlt className="me-2 mt-1" size={18} />
              <span style={{ fontSize: "1rem" }}>{dealData.company.location}</span>
            </div>

            <h6 className="fw-bold">About</h6>
            <p style={{ whiteSpace: "pre-line", fontSize: "0.95rem" }}>
              {dealData.company.about}
            </p>

            <div className="border-top pt-3 mt-3">
              <h6 className="fw-bold d-flex align-items-center">
                <Clock className="me-2" />
                Time Left
              </h6>
              <div
                className="bg-white p-2 rounded text-center mt-2 fw-semibold text-danger"
                style={{
                  fontSize: "1.2rem",
                  border: "1px dashed #dc3545",
                }}
              >
                03 Days : 12 Hours : 25 Minutes
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
