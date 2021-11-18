import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { GoSearch } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { GrGroup, GrCubes, GrDocumentTransfer } from "react-icons/gr";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = (): React.FC => {
  return (
    <>
      <Navbar expand="md" className={styles.header}>
        <Container>
          <Navbar.Brand className={styles.brand}>0L-SCAN</Navbar.Brand>
          <Navbar.Toggle aria-controls="header-nav" />
          <Navbar.Collapse id="header-nav">
            <Container>
              <Row className="d-flex justify-content-end">
                <Col md={10} lg={8} xl={6} xxl={5}>
                  <InputGroup>
                    <FormControl
                      placeholder="Search by Address, Block Height, TxHash..."
                      aria-label="Search by Address, Block Height, TxHash..."
                      aria-describedby="search-button"
                    />
                    <Button variant="secondary" id="search-button">
                      <GoSearch />
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className={styles.subHeader}>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <Link href="/" passHref>
                <a className={styles.navItem}>
                  <MdOutlineDashboard className={styles.navItemIcon} />
                  <h6>DASHBOARD</h6>
                </a>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Link href="/" passHref>
                <a className={styles.navItem}>
                  <GrDocumentTransfer className={styles.navItemIcon} />
                  <h6>TRANSACTIONS</h6>
                </a>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Link href="/" passHref>
                <a className={styles.navItem}>
                  <GrCubes className={styles.navItemIcon} />
                  <h6>BLOCKS</h6>
                </a>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Link href="/" passHref>
                <a className={styles.navItem}>
                  <GrGroup className={styles.navItemIcon} />
                  <h6>VALIDATORS</h6>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Header;
