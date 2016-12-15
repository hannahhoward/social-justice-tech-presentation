// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  ghostbusters: require("../assets/2mm5zmA.gif"),
  techgirlwonder: require("../assets/techgirlwonder-01.png"),
  andMyAxe: require("../assets/13244947.jpg"),
  coding: require("../assets/code-944504_1280.jpg"),
  arrow: require("../assets/2000px-MUTCD_M6-1R.svg.png"),
  nonprofit: require("../assets/masters-hero-720x240.jpg"),
  genderJusticeLA: require("../assets/gjla.jpg"),
  vanguard: require("../assets/CheyFidel.jpg"),
  burnOut: require("../assets/Burnt_Out_Car_Beside_Calderside_Road_-_geograph.org.uk_-_96296.jpg"),
  dontFuckItUp: require("../assets/rupaul.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#6D348D",
  secondary: "black",
  tertiary: "#D3BB47"
});

const alignCenter = {
  alignItems: "center",
  height: "550px",
  marginTop: "40px"
}

const notes = {
  endJourney: `
     -- I've been on all sides of the tech and social justice, multiple times
     -- my life is pretty split these days
  `,
  checkPrivilege: `
     -- thought about putting this at the end, cause it's hard and controversial
     -- but feel it's almost a prerequisite to doing anything
  `,
  default: ''
}


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Work Effectively
            </Heading>
            <Heading size={1} fit caps>
              In Social Justice
            </Heading>
            <Appear>
              <Heading size={1} fit caps textColor="secondary">
                A Guide For Techies
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Layout>
              <Fit>
                <Appear>
                  <Image src={images.techgirlwonder.replace("/", "")} height="700px" margin="0px 40px 0px 0px"/>
                </Appear>
              </Fit>
              <Fill>
                <Heading size={1} fit caps lineHeight={1}>
                  @techgirlwonder #AboutMe
                </Heading>
                <List>
                  <Appear><ListItem>Hannah Howard</ListItem></Appear>
                  <Appear><ListItem>Programmer/Proud SJW</ListItem></Appear>
                  <Appear><ListItem>hannah@techgirlwonder.com</ListItem></Appear>
                  <Appear><ListItem>Twitter above!</ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Heading size={3} caps textColor="tertiary">
               Agenda
            </Heading>
            <List>
              <Appear><ListItem>You have something to contribute!</ListItem></Appear>
              <Appear><ListItem>How I ended up here</ListItem></Appear>
              <Appear><ListItem>Checking privilege</ListItem></Appear>
              <Appear><ListItem>Listening to needs</ListItem></Appear>
              <Appear><ListItem>Adjusting Expectations</ListItem></Appear>
              <Appear><ListItem>Sustained Commitment</ListItem></Appear>
              <Appear><ListItem>Let's discuss!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} fit caps textColor="primary">
               So...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              #CurrentMood
            </Heading>
            <Image src={images.ghostbusters.replace("/", "")} width="900px" margin="40px auto 0px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} fit caps textColor="primary">
               Good News!
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps textColor="primary">
               You have lots to contribute!
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} caps textColor="primary">
               Techies can help with....
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Privacy</ListItem></Appear>
              <Appear><ListItem>Online Infrastructure</ListItem></Appear>
              <Appear><ListItem>Resources!</ListItem></Appear>
              <Appear><ListItem>Hacking?</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps textColor="primary" >
               We face a hard fight
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps textColor="primary">
               Everyone has a role to play
            </Heading>
            <Image src={images.andMyAxe.replace("/", "")} margin="100px auto 0px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps textColor="primary">
               We can do it well or...<br />not.
            </Heading>
            <Image src={images.dontFuckItUp.replace("/", "")} width="900px" margin="40px auto 0px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Heading size={1} fit caps textColor="black">
               #AboutMe #PartDeux
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                I started in tech...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.coding.replace("/", "")} width="100%" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                ...then worked in nonprofit...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.nonprofit.replace("/", "")} width="100%" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                ...then community organizing...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.genderJusticeLA.replace("/", "")} height="600px" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                ...then joined a vanguard...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.vanguard.replace("/", "")} height="600px" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                ...got burnt out...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.burnOut.replace("/", "")} width="100%" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.endJourney}>
             <Heading size={1} fit caps lineHeight={1}>
                ...and ended up back in tech.
            </Heading>
            <Layout style={alignCenter}>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 100px 0px 0px" display="block"/>
              </Fit>
              <Fill>
                  <Image src={images.coding.replace("/", "")} width="100%" display="block"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={notes.checkPrivilege}>
            <Heading size={3} fit caps textColor="black">
               Checking Privilege
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} caps textColor="primary">
              Story: The Bizarre Interview And The Meeting After
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={3} caps textColor="primary">
               Lessons
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>We are stratified</ListItem></Appear>
              <Appear><ListItem>Work Hard != Success</ListItem></Appear>
              <Appear><ListItem>Get outside your neighborhood</ListItem></Appear>
              <Appear><ListItem>Best contribution may be money</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} caps textColor="primary">
               Learn Some Stuff
            </Heading>
            <Appear><Text caps textColor="tertiary">
               This is a big topic
            </Text></Appear>
            <Appear><Heading size={2} fit margin="20px 0px">
              <Link href="https://www.ashedryden.com/blog/the-101level-reader-books-to-help-you-better-understand-your-biases-and-the-lived-experiences">
                 Ashe Dryden Bias 101 Reading List
              </Link>
            </Heading></Appear>
            <Appear><Text caps textColor="tertiary">
               ...And Don't Miss...
            </Text></Appear>
            <Appear><List textColor="tertiary">
              <ListItem>Sister Outsider - Audre Lorde</ListItem>
              <ListItem>The New Jim Crow - Michelle Alexander</ListItem>
              <ListItem>Organizing for Social Change - Midwest Academy</ListItem>
              <ListItem>Race Matters - Cornel West</ListItem>
              </List>
              </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} caps textColor="primary">
               Give Away Money!
            </Heading>
            <Heading size={1} caps textColor="tertiary">
               Resource Generation
            </Heading>
            <Heading size={2} fit>
              <Link href="https://resourcegeneration.org/">https://resourcegeneration.org/</Link>
            </Heading>
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={notes.default}>
            <Heading size={3} fit caps textColor="black">
               Listening To Needs
            </Heading>
          </Slide>
          
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} caps textColor="primary">
              Many Stories Of Techies Not Paying Attention
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="primary">
               Lessons
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="tertiary">
               Understand the problem first.
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="tertiary">
               You are not a subject expert.
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="tertiary">
               The problem is not lack of tech.
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="tertiary">
               Prefer Additive To Disruptive.
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={notes.default}>
            <Heading size={3} fit caps textColor="black">
               Adjusting Expectations
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} caps textColor="primary">
              Story: The Privacy Solution That Wasn't
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={3} caps textColor="primary">
               Lessons
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Solutions Only Valuable If Used</ListItem></Appear>
              <Appear><ListItem>Don't Assume Expertise</ListItem></Appear>
              <Appear><ListItem>Don't Assume Hardware</ListItem></Appear>
              <Appear><ListItem>Don't Assume Access</ListItem></Appear>
            </List>
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={notes.default}>
            <Heading size={3} fit caps textColor="black">
               Sustained Commitment
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} caps textColor="primary">
              Story: The Drive-By Tech Team
            </Heading>
          </Slide>
          
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="primary">
               Lessons
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="tertiary">
               Stick Around And Finish The Job.
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="tertiary">
               Plan for Maintainence.
            </Heading>
          </Slide>
          
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} fit caps textColor="tertiary">
               Long-term Collaboration -> Real Success.
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
