/* eslint-disable import/order */
import React from "react";

// nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles";
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import Palette from "@material-ui/icons/Palette";
import classNames from "classnames";
// @material-ui/core components
// @material-ui/icons
// core components
import Button from "../src/Button.js";
import Footer from "../src/Footer.js";
import GridContainer from "../src/GridContainer.js";
import GridItem from "../src/GridItem";
import Header from "../src/Header.js";
import HeaderLinks from "../src/HeaderLinks.js";
import NavPills from "../src/NavPills.js";
import Parallax from "../src/Parallax.js";

const useStyles = makeStyles();

export default function DoulaProfile(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="MyDoc"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={false} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={false} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Tru Kellman</h3>
                    <h6>Certified Midwife</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>Doula Info here</p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={false}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={false}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={false}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={false}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
